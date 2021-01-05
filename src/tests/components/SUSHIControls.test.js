import React from 'react';
import * as runSUSHI from '../../utils/RunSUSHI';
import * as generateLink from '../../utils/GenerateLink';
import { act } from 'react-dom/test-utils';
import { render, wait, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { unmountComponentAtNode } from 'react-dom';
import SUSHIControls from '../../components/SUSHIControls';
//import { generateLink } from '../../components/SUSHIControls';
import 'fake-indexeddb/auto';

const badSUSHIPackage = { a: '1', b: '2' };
const emptySUSHIPackage = { config: {}, profiles: [], extensions: [], instances: [], valueSets: [], codeSystems: [] };
const goodSUSHIPackage = {
  profiles: [{ resourceType: 'StructureDefinition', id: 'fish-patient' }],
  extensions: [],
  instances: [],
  valueSets: [],
  codeSystems: []
};

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('calls runSUSHI and changes the doRunSUSHI variable onClick, exhibits a bad package', async () => {
  const onClick = jest.fn();
  const resetLogMessages = jest.fn();
  const runSUSHISpy = jest.spyOn(runSUSHI, 'runSUSHI').mockReset().mockResolvedValue(badSUSHIPackage);

  act(() => {
    render(<SUSHIControls onClick={onClick} resetLogMessages={resetLogMessages} />, container);
  });
  const button = document.querySelector('[testid=Button]');
  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  await wait(() => {
    expect(resetLogMessages).toHaveBeenCalledTimes(1);
    expect(runSUSHISpy).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(2);
    expect(onClick).toHaveBeenCalledWith(true, 'Loading...', false);
    expect(onClick).toHaveBeenCalledWith(true, '', false);
  });
});

it('calls runSUSHI and changes the doRunSUSHI variable onClick, exhibits an empty package', async () => {
  const onClick = jest.fn();
  const resetLogMessages = jest.fn();
  const runSUSHISpy = jest.spyOn(runSUSHI, 'runSUSHI').mockReset().mockResolvedValue(emptySUSHIPackage);

  act(() => {
    render(<SUSHIControls onClick={onClick} resetLogMessages={resetLogMessages} />, container);
  });
  const button = document.querySelector('[testid=Button]');
  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  await wait(() => {
    expect(resetLogMessages).toHaveBeenCalledTimes(1);
    expect(runSUSHISpy).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(2);
    expect(onClick).toHaveBeenCalledWith(true, 'Loading...', false);
    expect(onClick).toHaveBeenCalledWith(true, '', false);
  });
});

it('calls runSUSHI and changes the doRunSUSHI variable onClick, exhibits a good package', async () => {
  const onClick = jest.fn();
  const resetLogMessages = jest.fn();
  const runSUSHISpy = jest.spyOn(runSUSHI, 'runSUSHI').mockReset().mockResolvedValue(goodSUSHIPackage);

  act(() => {
    render(<SUSHIControls onClick={onClick} resetLogMessages={resetLogMessages} />, container);
  });
  const button = document.querySelector('[testid=Button]');
  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  await wait(() => {
    expect(resetLogMessages).toHaveBeenCalledTimes(1);
    expect(runSUSHISpy).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(2);
    expect(onClick).toHaveBeenCalledWith(true, 'Loading...', false);
    expect(onClick).toHaveBeenCalledWith(true, JSON.stringify(goodSUSHIPackage, null, 2), true);
  });
});

it('uses user provided canonical when calling runSUSHI', () => {
  const onClick = jest.fn();
  const resetLogMessages = jest.fn();
  const runSUSHISpy = jest.spyOn(runSUSHI, 'runSUSHI').mockReset().mockResolvedValue(goodSUSHIPackage);

  const { getByText, getByLabelText } = render(
    <SUSHIControls onClick={onClick} resetLogMessages={resetLogMessages} />,
    container
  );

  const configButton = getByText('Configuration');
  fireEvent.click(configButton);
  const canonicalInput = getByLabelText('Canonical URL');
  expect(canonicalInput.value).toEqual('http://example.org'); // Default

  fireEvent.change(canonicalInput, { target: { value: 'http://other.org' } });

  const runButton = getByText('Run');
  fireEvent.click(runButton);

  const expectedConfig = {
    canonical: 'http://other.org',
    version: '1.0.0',
    FSHOnly: true,
    fhirVersion: ['4.0.1']
  };
  expect(runSUSHISpy).toHaveBeenCalledWith(undefined, expectedConfig); // Includes new config
});

it('uses user provided version when calling runSUSHI', () => {
  const onClick = jest.fn();
  const resetLogMessages = jest.fn();
  const runSUSHISpy = jest.spyOn(runSUSHI, 'runSUSHI').mockReset().mockResolvedValue(goodSUSHIPackage);

  const { getByText, getByLabelText } = render(
    <SUSHIControls onClick={onClick} resetLogMessages={resetLogMessages} />,
    container
  );

  const configButton = getByText('Configuration');
  fireEvent.click(configButton);
  const canonicalInput = getByLabelText('Version');
  expect(canonicalInput.value).toEqual('1.0.0'); // Default

  fireEvent.change(canonicalInput, { target: { value: '2.0.0' } });

  const runButton = getByText('Run');
  fireEvent.click(runButton);

  const expectedConfig = {
    canonical: 'http://example.org',
    version: '2.0.0',
    FSHOnly: true,
    fhirVersion: ['4.0.1']
  };
  expect(runSUSHISpy).toHaveBeenCalledWith(undefined, expectedConfig); // Includes new version
});

// This test below needs some work. Possibly due to the async nature of generateLink?
it.skip('copies link to clipboard on button click', async () => {
  let getByText;
  const onClick = jest.fn();
  const resetLogMessages = jest.fn();
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);
  const generateLinkSpy = jest.spyOn(generateLink, 'generateLink').mockReset().mockResolvedValue('success');

  act(() => {
    getByText = render(
      <SUSHIControls onClick={onClick} text={'Edit FSH Here'} resetLogMessages={resetLogMessages} />,
      container
    ).getByText;
  });

  // act(() => {
  // });

  await wait(() => {
    const shareButton = getByText('Share');
    fireEvent.click(shareButton);
    const copyBtn = getByText('Copy to Clipboard');
    fireEvent.click(copyBtn);

    expect(generateLinkSpy).toHaveBeenCalled();
    expect(setState).toHaveBeenCalledWith({ copied: true, copyButton: 'Link Copied' });
  });
});

it('generates link when share button is clicked', async () => {
  let getByText;
  const onClick = jest.fn();
  const resetLogMessages = jest.fn();
  const generateLinkSpy = jest
    .spyOn(generateLink, 'generateLink')
    .mockReset()
    .mockImplementation(() => {
      return 'success';
    });

  act(() => {
    getByText = render(
      <SUSHIControls onClick={onClick} text={'Edit FSH Here'} resetLogMessages={resetLogMessages} />,
      container
    ).getByText;
  });
  act(() => {
    const shareButton = getByText('Share');
    fireEvent.click(shareButton);
  });
  await wait(() => {
    expect(generateLinkSpy).toHaveBeenCalled();
  });
});

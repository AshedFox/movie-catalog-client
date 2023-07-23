'use client';

import React from 'react';
import ReactSelect, { Props as RSProps } from 'react-select';
import clsx from 'clsx';

const controlStyles = {
  base: 'border rounded bg-gray-50 dark:bg-gray-700 cursor-pointer',
  focus: 'border-primary-200 dark:border-primary-600',
  nonFocus: 'border-gray-200 dark:border-gray-600 hover:border-gray-400',
};
const placeholderStyles = 'text-gray-500';
const selectInputStyles = '';
const valueContainerStyles = 'gap-1 px-3';
const singleValueStyles = 'ml-1';
const multiValueStyles =
  'bg-gray-200 dark:bg-gray-600 rounded px-2 py-1 gap-1.5';
const multiValueLabelStyles = '';
const multiValueRemoveStyles =
  'hover:text-red-600 dark:hover:text-red-700 cursor-pointer';
const indicatorsContainerStyles = 'p-1 gap-1';
const clearIndicatorStyles =
  'text-gray-500 p-2 hover:text-red-600 dark:hover:text-red-700 cursor-pointer';
const indicatorSeparatorStyles = 'bg-gray-300 dark:bg-gray-500';
const dropdownIndicatorStyles =
  'p-1 text-gray-500 rounded-md cursor-pointer hover:text-gray-900 dark:hover:text-gray-50';
const menuStyles =
  'p-1 mt-2 border border-gray-200 dark:border-gray-600 bg-gray-50 cursor-pointer dark:bg-gray-700 rounded';
const groupHeadingStyles = 'ml-3 mt-2 mb-1 text-gray-500 text-sm';
const optionStyles = {
  base: 'hover:cursor-pointer px-3 py-2 rounded',
  focus:
    'bg-gray-200 dark:bg-gray-600 active:bg-gray-300 dark:active:bg-gray-500',
  selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
};
const noOptionsMessageStyles =
  'text-gray-500 p-2 bg-gray-50 dark:bg-gray-700 border border-dashed border-gray-200 border-gray-600 rounded-sm';

const Select = (props: RSProps) => (
  <ReactSelect
    isMulti
    closeMenuOnSelect={false}
    hideSelectedOptions={false}
    unstyled
    styles={{
      input: (base) => ({
        ...base,
        'input:focus': {
          boxShadow: 'none',
        },
      }),
      // On mobile, the label will truncate automatically, so we want to
      // override that behaviour.
      multiValueLabel: (base) => ({
        ...base,
        whiteSpace: 'normal',
        overflow: 'visible',
      }),
      control: (base) => ({
        ...base,
        transition: 'none',
      }),
    }}
    classNames={{
      control: ({ isFocused }) =>
        clsx(
          isFocused ? controlStyles.focus : controlStyles.nonFocus,
          controlStyles.base,
        ),
      placeholder: () => placeholderStyles,
      input: () => selectInputStyles,
      valueContainer: () => valueContainerStyles,
      singleValue: () => singleValueStyles,
      multiValue: () => multiValueStyles,
      multiValueLabel: () => multiValueLabelStyles,
      multiValueRemove: () => multiValueRemoveStyles,
      indicatorsContainer: () => indicatorsContainerStyles,
      clearIndicator: () => clearIndicatorStyles,
      indicatorSeparator: () => indicatorSeparatorStyles,
      dropdownIndicator: () => dropdownIndicatorStyles,
      menu: () => menuStyles,
      groupHeading: () => groupHeadingStyles,
      option: ({ isFocused, isSelected }) =>
        clsx(
          isFocused && optionStyles.focus,
          isSelected && optionStyles.selected,
          optionStyles.base,
        ),
      noOptionsMessage: () => noOptionsMessageStyles,
    }}
    {...props}
  />
);

export default Select;

'use client';

import * as Select from '@radix-ui/react-select';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
} from '@radix-ui/react-icons';

export default function LanguageSelect({
  languages,
  value,
  onChange,
}: {
  languages: string[];
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        className="inline-flex items-center justify-between rounded px-3 py-2
                   border border-gray-300 bg-white text-black
                   dark:bg-gray-800 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        <Select.Value placeholder="All languages" />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Content className="z-50 mt-2 rounded-md bg-white dark:bg-gray-800 shadow-lg">
        <Select.ScrollUpButton className="flex items-center justify-center p-2">
          <ChevronUpIcon />
        </Select.ScrollUpButton>

        <Select.Viewport className="p-2">
          <Select.Item
            value="all"
            className="px-3 py-2 cursor-pointer rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Select.ItemText>All</Select.ItemText>
            <Select.ItemIndicator className="ml-auto">
              <CheckIcon />
            </Select.ItemIndicator>
          </Select.Item>

          {languages.map((lang) => (
            <Select.Item
              key={lang}
              value={lang}
              className="px-3 py-2 cursor-pointer rounded
                         text-black dark:text-white
                         hover:bg-gray-100 dark:hover:bg-gray-700
                         focus:bg-gray-200 dark:focus:bg-gray-600"
            >
              <Select.ItemText>{lang.toUpperCase()}</Select.ItemText>
              <Select.ItemIndicator className="ml-auto">
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>
          ))}
        </Select.Viewport>

        <Select.ScrollDownButton className="flex items-center justify-center p-2">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Root>
  );
}

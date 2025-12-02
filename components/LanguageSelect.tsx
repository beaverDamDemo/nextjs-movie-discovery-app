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
        className="inline-flex items-center justify-between rounded-md px-3 h-10 w-32
             border border-gray-300 bg-gray-50 text-gray-900
             dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
             shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700
             focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        <Select.Value placeholder="Select language" />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Content
        className="z-50 mt-2 rounded-md bg-white dark:bg-gray-900
                   border border-gray-200 dark:border-gray-700
                   shadow-lg"
      >
        <Select.ScrollUpButton className="flex items-center justify-center p-2 text-gray-500 dark:text-gray-400">
          <ChevronUpIcon />
        </Select.ScrollUpButton>

        <Select.Viewport className="p-1">
          <Select.Item
            value="all"
            className="flex items-center justify-between px-3 py-2 rounded-md
                       cursor-pointer select-none
                       text-gray-900 dark:text-gray-100
                       hover:bg-gray-100 dark:hover:bg-gray-700
                       focus:bg-gray-200 dark:focus:bg-gray-600"
          >
            <Select.ItemText>All</Select.ItemText>
            <Select.ItemIndicator>
              <CheckIcon />
            </Select.ItemIndicator>
          </Select.Item>

          {languages.map((lang) => (
            <Select.Item
              key={lang}
              value={lang}
              className="flex items-center justify-between px-3 py-2 rounded-md
                         cursor-pointer select-none
                         text-gray-900 dark:text-gray-100
                         hover:bg-gray-100 dark:hover:bg-gray-700
                         focus:bg-gray-200 dark:focus:bg-gray-600"
            >
              <Select.ItemText>{lang.toUpperCase()}</Select.ItemText>
              <Select.ItemIndicator>
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>
          ))}
        </Select.Viewport>

        <Select.ScrollDownButton className="flex items-center justify-center p-2 text-gray-500 dark:text-gray-400">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Root>
  );
}

import * as Tooltip from '@radix-ui/react-tooltip';
import type { PropsWithChildren } from 'react';

type MyTooltipProps = PropsWithChildren<{
  content: string;
}>;

const MyTooltip = ({ content, children }: MyTooltipProps) => (
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <div>{children}</div>
      </Tooltip.Trigger>

      <Tooltip.Portal>
        <Tooltip.Content
          sideOffset={4}
          side='bottom'
          className='z-20 rounded-md bg-geyser-100 px-3 py-2 shadow-md dark:bg-bunker-800'
        >
          <span className='text-sm font-medium'>{content}</span>
          <Tooltip.Arrow className='fill-geyser-100 dark:fill-bunker-800' />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
);

export default MyTooltip;

import { ReactElement, ReactNode, createContext, useContext } from 'react';

import { useScreenSize } from '@/hooks/screen';

interface IScreen {
  width: number;
  isXS: boolean;
  isSM: boolean;
  isMD: boolean;
  isLG: boolean;
  isXL: boolean;
  is2XL: boolean;
  is3XL: boolean;
  is4XL: boolean;
  is5XL: boolean;
  // use these unless you need to be more specific
  isSmall: boolean; // mobile
  isMedium: boolean; //tablet
  isLarge: boolean; // laptop
  isEnormous: boolean; // monitor
}

const ScreenContext = createContext<IScreen>({
  width: 0,
  isXS: true,
  isSM: false,
  isMD: false,
  isLG: false,
  isXL: false,
  is2XL: false,
  is3XL: false,
  is4XL: false,
  is5XL: false,
  isSmall: true,
  isMedium: false,
  isLarge: false,
  isEnormous: false,
});

export function useScreen() {
  return useContext(ScreenContext);
}

interface Props {
  children: ReactNode;
}

export function ScreenProvider(props: Props): ReactElement {
  const { children } = props;

  const value: IScreen = useScreenSize();

  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  );
}

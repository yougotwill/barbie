import { useEffect, useState } from 'react';

import UI from '@/constants/ui';
import { useWindowSize } from 'react-use';

export function useScreenSize() {
  const { width } = useWindowSize();

  // Mobile first
  const [isXS, setIsXS] = useState(true);
  const [isSM, setIsSM] = useState(false);
  const [isMD, setIsMD] = useState(false);
  const [isLG, setIsLG] = useState(false);
  const [isXL, setIsXL] = useState(false);
  const [is2XL, setIs2XL] = useState(false);
  const [is3XL, setIs3XL] = useState(false);
  const [is4XL, setIs4XL] = useState(false);
  const [is5XL, setIs5XL] = useState(false);

  useEffect(() => {
    const _isXS = width <= UI.XS_BREAKPOINT;
    const _isSM = width > UI.XS_BREAKPOINT && width <= UI.SM_BREAKPOINT;
    const _isMD = width > UI.SM_BREAKPOINT && width <= UI.MD_BREAKPOINT;
    const _isLG = width > UI.MD_BREAKPOINT && width <= UI.LG_BREAKPOINT;
    const _isXL = width > UI.LG_BREAKPOINT && width <= UI.XL_BREAKPOINT;
    const _is2XL = width > UI.XL_BREAKPOINT && width <= UI['2XL_BREAKPOINT'];
    const _is3XL =
      width > UI['2XL_BREAKPOINT'] && width <= UI['3XL_BREAKPOINT'];
    const _is4XL =
      width > UI['3XL_BREAKPOINT'] && width <= UI['4XL_BREAKPOINT'];
    const _is5XL = width > UI['4XL_BREAKPOINT'];

    setIsXS(_isXS);
    setIsSM(_isSM);
    setIsMD(_isMD);
    setIsLG(_isLG);
    setIsXL(_isXL);
    setIs2XL(_is2XL);
    setIs3XL(_is3XL);
    setIs4XL(_is4XL);
    setIs5XL(_is5XL);
  }, [width]);

  return {
    width,
    isXS,
    isSM,
    isMD,
    isLG,
    isXL,
    is2XL,
    is3XL,
    is4XL,
    is5XL,
    isSmall: isXS || isSM,
    isMedium: isMD,
    isLarge: isLG || isXL || is2XL || is3XL,
    isEnormous: is4XL || is5XL,
  };
}

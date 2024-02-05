const customMediaQuery = (maxWidth: number) =>
  `@media only screen and (max-width: ${maxWidth}px)`;

export const breakpoints = {
  // deprecated, but still used in user-dashboard
  xlarge: 1440,
  large: 1200,
  medium: 1024,
  small: 992,
  xsmall: 767,
  xxsmall: 480,

  // please use this names in future projects
  desktopHD: 1920,
  desktopMedium: 1680,
  desktopSmall: 1440,
  laptop: 1366,
  laptopSmall: 1280,
  tabletLandscape: 1024,
  tabletMedium: 900,
  tabletPortrait: 768,
  mobileXLarge: 640,
  mobileLarge: 576,
  mobileMedium: 480,
  mobileSmall: 415,
  mobileXSmall: 375,
  mobileTiny: 325,
};

export const maxWidthBreakpoints = {
  xlarge: `only screen and (max-width: ${breakpoints.xlarge}px)`,
  large: `only screen and (max-width: ${breakpoints.large}px)`,
  medium: `only screen and (max-width: ${breakpoints.medium}px)`,
  small: `only screen and (max-width: ${breakpoints.small}px)`,
  xsmall: `only screen and (max-width: ${breakpoints.xsmall}px)`,
  xxsmall: `only screen and (max-width: ${breakpoints.xxsmall}px)`,

  desktopHD: `only screen and (max-width: ${breakpoints.desktopHD}px)`,
  desktopMedium: `only screen and (max-width: ${breakpoints.desktopMedium}px)`,
  desktopSmall: `only screen and (max-width: ${breakpoints.desktopSmall}px)`,
  laptop: `only screen and (max-width: ${breakpoints.laptop}px)`,
  laptopSmall: `only screen and (max-width: ${breakpoints.laptopSmall}px)`,
  tabletLandscape: `only screen and (max-width: ${breakpoints.tabletLandscape}px)`,
  tabletMedium: `only screen and (max-width: ${breakpoints.tabletMedium}px)`,
  tabletPortrait: `only screen and (max-width: ${breakpoints.tabletPortrait}px)`,
  mobileXLarge: `only screen and (max-width: ${breakpoints.mobileXLarge}px)`,
  mobileLarge: `only screen and (max-width: ${breakpoints.mobileLarge}px)`,
  mobileMedium: `only screen and (max-width: ${breakpoints.mobileMedium}px)`,
  mobileSmall: `only screen and (max-width: ${breakpoints.mobileSmall}px)`,
  mobileXSmall: `only screen and (max-width: ${breakpoints.mobileXSmall}px)`,
  mobileTiny: `only screen and (max-width: ${breakpoints.mobileTiny}px)`,
};

export const media = {
  custom: customMediaQuery,

  xlarge: customMediaQuery(breakpoints.xlarge), // 1200 - 1440
  large: customMediaQuery(breakpoints.large), // 1025 - 1200
  medium: customMediaQuery(breakpoints.medium), // 993 - 1024
  small: customMediaQuery(breakpoints.small), // 768 - 992
  xsmall: customMediaQuery(breakpoints.xsmall), // 480 - 767
  xxsmall: customMediaQuery(breakpoints.xxsmall),

  desktopHD: customMediaQuery(breakpoints.desktopHD),
  desktopMedium: customMediaQuery(breakpoints.desktopMedium),
  desktopSmall: customMediaQuery(breakpoints.desktopSmall),
  laptop: customMediaQuery(breakpoints.laptop),
  laptopSmall: customMediaQuery(breakpoints.laptopSmall),
  tabletLandscape: customMediaQuery(breakpoints.tabletLandscape),
  tabletMedium: customMediaQuery(breakpoints.tabletMedium),
  tabletPortrait: customMediaQuery(breakpoints.tabletPortrait),
  mobileXLarge: customMediaQuery(breakpoints.mobileXLarge),
  mobileLarge: customMediaQuery(breakpoints.mobileLarge),
  mobileMedium: customMediaQuery(breakpoints.mobileMedium),
  mobileSmall: customMediaQuery(breakpoints.mobileSmall),
  mobileXSmall: customMediaQuery(breakpoints.mobileXSmall),
  mobileTiny: customMediaQuery(breakpoints.mobileTiny),
};

/**
 * Spec React Icon Renderers.
 */
import { createElement as el } from '@wordpress/element';

// These are common properties used by all icons
const commonProperties = {
	// Choose from the common SVG sizes.
	size: {
		big: 32,
		regular: 24,
		small: 16,
	},
	// Choose from the common stroke thicknesses.
	stroke: {
		thick: 2,
		regular: 1.4,
		thin: 1.2,
	},
	// Choose from the common colors.
	color: {
		currentColor: 'currentColor',
		none: 'none',
		whiteish: '#f5f5f5',
	},
	// Spread this for rounded stroke vertices.
	rounded: {
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
	},
};

// These are the common formats used for our SVGs.
const format = {
	// Spread these values to get all the required properties for an outlined icon.
	outlined: {
		className: 'spec-ai__icon--outlined',
		stroke: commonProperties.color.currentColor,
		strokeWidth: commonProperties.stroke.regular,
		fill: commonProperties.color.none,
		...commonProperties.rounded,
	},
	// Spread these values to get all the required properties for a filled icon.
	filled: {
		className: 'spec-ai__icon--filled',
		fill: commonProperties.color.currentColor,
		stroke: commonProperties.color.none,
	},
};

// The Spec Logo.
export const SpecLogo = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.big,
		height: commonProperties.size.big,
		viewBox: '0 0 35 62',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M9.49539 35.0351C3.27735 33.3759 1.96443 24.7403 7.43927 21.5112L25.2529 11.0046C25.9591 10.5881 26.8389 11.1516 26.7558 11.9672L26.203 17.3955C26.0094 19.2968 24.9215 20.9922 23.2738 21.9605L15.8572 26.3189C15.0822 26.776 15.2389 27.963 16.1047 28.1941L26.489 30.9649C32.707 32.6241 34.0199 41.2597 28.5451 44.4888L10.7314 54.9954C10.0253 55.4119 9.1455 54.8484 9.22856 54.0328L9.78137 48.6045C9.975 46.7032 11.0629 45.0078 12.7106 44.0395L20.1272 39.6811C20.9022 39.224 20.7455 38.037 19.8796 37.8059L9.49539 35.0351Z',
			...format.filled,
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			...childParams,
		},
	),
	el(
		'path',
		{
			d: 'M20.135 4.09687L18.25 4.78929C18.1 4.8433 18 4.98571 18 5.14286C18 5.3 18.1 5.44241 18.25 5.49643L20.135 6.18884L20.84 8.04018C20.895 8.1875 21.04 8.28571 21.2 8.28571C21.36 8.28571 21.505 8.1875 21.56 8.04018L22.265 6.18884L24.15 5.49643C24.3 5.44241 24.4 5.3 24.4 5.14286C24.4 4.98571 24.3 4.8433 24.15 4.78929L22.265 4.09687L21.56 2.24554C21.505 2.09821 21.36 2 21.2 2C21.04 2 20.895 2.09821 20.84 2.24554L20.135 4.09687Z',
			...format.filled,
			...childParams,
		},
	),
	el(
		'path',
		{
			d: 'M27.0078 24.5C27.0078 24.325 27.1172 24.1682 27.2813 24.1063L29.3411 23.3333L30.1141 21.2734C30.176 21.1094 30.3328 21 30.5078 21C30.6828 21 30.8396 21.1094 30.9016 21.2734L31.6745 23.3333L33.7344 24.1063C33.8984 24.1682 34.0078 24.325 34.0078 24.5C34.0078 24.675 33.8984 24.8318 33.7344 24.8937L31.6745 25.6667L30.9016 27.7266C30.8396 27.8906 30.6828 28 30.5078 28C30.3328 28 30.176 27.8906 30.1141 27.7266L29.3411 25.6667L27.2813 24.8937C27.1172 24.8318 27.0078 24.675 27.0078 24.5Z',
			...format.filled,
			...childParams,
		},
	),
	el(
		'path',
		{
			d: 'M0 15.5C0 15.275 0.140626 15.0734 0.351564 14.9938L3 14L3.99375 11.3516C4.07344 11.1406 4.275 11 4.5 11C4.725 11 4.92656 11.1406 5.00625 11.3516L6 14L8.64844 14.9938C8.85937 15.0734 9 15.275 9 15.5C9 15.725 8.85937 15.9266 8.64844 16.0062L6 17L5.00625 19.6484C4.92656 19.8594 4.725 20 4.5 20C4.275 20 4.07344 19.8594 3.99375 19.6484L3 17L0.351564 16.0062C0.140626 15.9266 0 15.725 0 15.5Z',
			...format.filled,
			...childParams,
		},
	),
	el(
		'path',
		{
			d: 'M19.0078 16.8095L25.0078 13L24.4063 16.8579C24.1781 18.3211 23.3131 19.6079 22.0443 20.3716L18.5078 22.5L19.0078 16.8095Z',
			fill: commonProperties.color.whiteish,
			...childParams,
		},
	),
	el(
		'ellipse',
		{
			...format.filled,
			cx: '33',
			cy: '14',
			rx: '1',
			ry: '1',
			...childParams,
		},
	),
	el(
		'ellipse',
		{
			...format.filled,
			cx: '12',
			cy: '10.0005',
			rx: '1',
			ry: '1',
			...childParams,
		},
	),
);


// The Wand Icon.
export const WandIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.regular,
		height: commonProperties.size.regular,
		viewBox: '0 0 28 28',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'g',
		{
			clipPath: 'url(#clip_spec_ai_wand)',
		},
		el(
			'path',
			{
				d: 'M15.4712 1.71924C15.4712 0.917724 14.8013 0.23584 13.9998 0.23584C13.1982 0.23584 12.5164 0.917724 12.5164 1.71924V5.36791C12.5164 6.16943 13.1982 6.83935 13.9998 6.83935C14.8013 6.83935 15.4712 6.16943 15.4712 5.36791V1.71924ZM19.1558 6.83935C18.6054 7.40161 18.6054 8.35865 19.1798 8.93286C19.73 9.48316 20.6989 9.48316 21.2612 8.90893L23.7614 6.40869C24.3237 5.8584 24.3118 4.88941 23.7376 4.31518C23.1873 3.75293 22.2183 3.77685 21.656 4.33911L19.1558 6.83935ZM6.72632 8.90893C7.28858 9.48316 8.25757 9.48316 8.80786 8.93286C9.38208 8.35865 9.38208 7.40161 8.8318 6.83935L6.34351 4.33911C5.78125 3.77685 4.81226 3.75293 4.26197 4.31518C3.68774 4.87744 3.68774 5.84643 4.23805 6.39672L6.72632 8.90893ZM23.283 26.1235C24.0007 26.8532 25.2209 26.8413 25.9267 26.1235C26.6327 25.3937 26.6327 24.2095 25.9267 23.4797L14.574 12.0432C13.8562 11.3254 12.636 11.3254 11.9302 12.0432C11.2124 12.773 11.2244 13.9573 11.9302 14.675L23.283 26.1235ZM1.63013 12.5935C0.828614 12.5935 0.158691 13.2634 0.158691 14.0649C0.158691 14.8665 0.828614 15.5364 1.63013 15.5364H5.27881C6.08032 15.5364 6.76221 14.8665 6.76221 14.0649C6.76221 13.2634 6.08032 12.5935 5.27881 12.5935H1.63013ZM26.3574 15.5364C27.1589 15.5364 27.8409 14.8665 27.8409 14.0649C27.8409 13.2634 27.1589 12.5935 26.3574 12.5935H22.7207C21.9192 12.5935 21.2372 13.2634 21.2372 14.0649C21.2372 14.8665 21.9192 15.5364 22.7207 15.5364H26.3574ZM16.8469 17.7375L13.1145 13.9932C12.8154 13.7061 12.7078 13.3352 13.0068 13.0481C13.27 12.7849 13.6528 12.8806 13.9519 13.1797L17.6604 16.9002L16.8469 17.7375ZM4.23805 21.6972C3.67579 22.2595 3.66382 23.2285 4.21411 23.7788C4.77636 24.353 5.74536 24.3651 6.30761 23.8147L8.80786 21.3145C9.37011 20.7522 9.38208 19.7951 8.8318 19.2328C8.26954 18.6706 7.30055 18.6587 6.73829 19.209L4.23805 21.6972ZM15.4712 22.774C15.4712 21.9725 14.8013 21.2905 13.9998 21.2905C13.1982 21.2905 12.5164 21.9725 12.5164 22.774V26.4107C12.5164 27.2121 13.1982 27.8941 13.9998 27.8941C14.8013 27.8941 15.4712 27.2121 15.4712 26.4107V22.774Z',
				fill: commonProperties.color.currentColor,
				...childParams,
			},
		),
	),
	el(
		'defs',
		null,
		el(
			'clipPath',
			{
				id: 'clip_spec_ai_wand',
			},
			el(
				'rect',
				{
					width: 28,
					height: 28,
					fill: commonProperties.color.whiteish,
					...childParams,
				},
			),
		),
	),
);

// The Clipboard Icon.
export const ClipboardIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.regular,
		height: commonProperties.size.regular,
		viewBox: '0 0 28 28',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M13.2411 4.47556C13.1656 4.72035 13.125 4.98043 13.125 5.25C13.125 5.73325 13.5168 6.125 14 6.125H19.25C19.7332 6.125 20.125 5.73325 20.125 5.25C20.125 4.98043 20.0844 4.72035 20.0089 4.47556M13.2411 4.47556C13.5715 3.40383 14.5698 2.625 15.75 2.625H17.5C18.6802 2.625 19.6785 3.40383 20.0089 4.47556M13.2411 4.47556C12.8028 4.50168 12.3659 4.53284 11.9304 4.56899C10.6108 4.67851 9.625 5.80211 9.625 7.12626V9.625M20.0089 4.47556C20.4472 4.50168 20.8841 4.53284 21.3196 4.56899C22.6392 4.67851 23.625 5.80211 23.625 7.12625V19.25C23.625 20.6997 22.4497 21.875 21 21.875H18.375M9.625 9.625H5.6875C4.96263 9.625 4.375 10.2126 4.375 10.9375V24.0625C4.375 24.7874 4.96263 25.375 5.6875 25.375H17.0625C17.7874 25.375 18.375 24.7874 18.375 24.0625V21.875M9.625 9.625H17.0625C17.7874 9.625 18.375 10.2126 18.375 10.9375V21.875M8.75 18.375L10.5 20.125L14 15.75',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thick,
			...childParams,
		},
	),
);

// The Smiley Icon.
export const SmileyIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.regular,
		height: commonProperties.size.regular,
		viewBox: '0 0 28 28',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M17.7123 17.7123C17.2248 18.1998 16.6461 18.5866 16.0091 18.8504C15.3721 19.1142 14.6894 19.25 14 19.25C13.3106 19.25 12.6279 19.1142 11.9909 18.8504C11.3539 18.5866 10.7752 18.1998 10.2877 17.7123M24.5 14C24.5 15.3789 24.2284 16.7443 23.7007 18.0182C23.1731 19.2921 22.3996 20.4496 21.4246 21.4246C20.4496 22.3996 19.2921 23.1731 18.0182 23.7007C16.7443 24.2284 15.3789 24.5 14 24.5C12.6211 24.5 11.2557 24.2284 9.98182 23.7007C8.70791 23.1731 7.55039 22.3996 6.57538 21.4246C5.60036 20.4496 4.82694 19.2921 4.29926 18.0182C3.77159 16.7443 3.5 15.3789 3.5 14C3.5 11.2152 4.60625 8.54451 6.57538 6.57538C8.54451 4.60625 11.2152 3.5 14 3.5C16.7848 3.5 19.4555 4.60625 21.4246 6.57538C23.3938 8.54451 24.5 11.2152 24.5 14ZM11.375 11.375C11.375 11.858 11.179 12.25 10.9375 12.25C10.696 12.25 10.5 11.858 10.5 11.375C10.5 10.892 10.696 10.5 10.9375 10.5C11.179 10.5 11.375 10.892 11.375 11.375ZM10.9375 11.375H10.9468V11.3925H10.9375V11.375ZM17.5 11.375C17.5 11.858 17.304 12.25 17.0625 12.25C16.821 12.25 16.625 11.858 16.625 11.375C16.625 10.892 16.821 10.5 17.0625 10.5C17.304 10.5 17.5 10.892 17.5 11.375ZM17.0625 11.375H17.0718V11.3925H17.0625V11.375Z',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thick,
			...childParams,
		},
	),
);

// The Translate Icon.
export const TranslateIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.regular,
		height: commonProperties.size.regular,
		viewBox: '0 0 28 28',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M12.25 24.5L18.375 11.375L24.5 24.5M14 21H22.75M3.5 6.55783C5.82213 6.26887 8.15996 6.12432 10.5 6.125M10.5 6.125C11.8067 6.125 13.1052 6.16933 14.3897 6.258M10.5 6.125V3.5M14.3897 6.258C13.0387 12.4343 8.97167 17.5933 3.5 20.419M14.3897 6.258C15.435 6.32917 16.4722 6.4295 17.5 6.55783M12.1462 16.4687C10.2328 14.5234 8.71632 12.2243 7.68133 9.69967',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thick,
			...childParams,
		},
	),
);

// The Code Block Icon.
export const CodeBlockIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.regular,
		height: commonProperties.size.regular,
		viewBox: '0 0 28 28',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M11.1998 17.5L7.6998 14L11.1998 10.5M16.7998 10.5L20.2998 14L16.7998 17.5M5.5998 25.2C4.05341 25.2 2.7998 23.9464 2.7998 22.4V5.60005C2.7998 4.05365 4.05341 2.80005 5.5998 2.80005H22.3998C23.9462 2.80005 25.1998 4.05365 25.1998 5.60005V22.4C25.1998 23.9464 23.9462 25.2 22.3998 25.2H5.5998Z',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thick,
			...childParams,
		},
	),
);

// The External Link Icon.
export const ExternalLinkIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.small,
		height: commonProperties.size.small,
		viewBox: '0 0 12 12',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M5 3H3C2.44772 3 2 3.44772 2 4V9C2 9.55228 2.44772 10 3 10H8C8.55228 10 9 9.55228 9 9V7M7 2H10M10 2V5M10 2L5 7',
			...format.outlined,
			...childParams,
		},
	),
);

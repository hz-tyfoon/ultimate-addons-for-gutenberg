/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import icons from './icons';
/**
 * Template option choices for predefined form layouts.
 *
 * @constant
 * @type {Array}
 */
const variations = [
	{
		name: 'style-1',
		icon: icons['style-1'],
		title: __( 'Style 1', 'ultimate-addons-for-gutenberg' ),
		attributes: {
			backgroundType: 'color',
			backgroundColor: '#ffffff',
			blockBorderTopLeftRadius: 4,
			blockBorderTopRightRadius: 4,
			blockBorderBottomRightRadius: 4,
			blockBorderBottomLeftRadius: 4,
			boxShadowColor: '#00000021',
			boxShadowHOffset: 0,
			boxShadowVOffset: 12,
			boxShadowBlur: 16,
			boxShadowSpread: -4,
			boxShadowPosition: 'outset',
			topPaddingDesktop: 24,
			bottomPaddingDesktop: 24,
			leftPaddingDesktop: 24,
			rightPaddingDesktop: 24,
		},
		isDefault: true,
		innerBlocks: [
			[ 'uagb/image', { align:'', url:`${ uagb_blocks_info.uagb_url }/admin/assets/images/uag-placeholder.svg`, bottomMarginDesktop: 32}],
			[ 'uagb/advanced-heading', { headingAlign: 'left', headingTitleToggle: true, headingDescToggle: true, headingDesc: 'Design',  subHeadingColor: '#6941C6', headingTag: 'h3',headingTitle: 'UX Review Presentation' , headingDescPosition: 'above-heading', headSpace: 12, subHeadSpace: 12, blockTopPadding: 15, blockBottomPadding: 0, subHeadFontWeight: 600 }],
			[ 'uagb/advanced-heading', { headingAlign: 'left', headingTitleToggle: false, headingDescToggle: true, blockTopPadding: 0, blockBottomPadding: 0, headingDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', subHeadSpace: 32 } ],
			[ 'uagb/advanced-heading', { headingAlign: 'left', headingTitleToggle: true, headingDescToggle: true, headingTag: 'h6', headingTitle: 'Olivia Rhye', blockTopPadding: 0, blockBottomPadding: 0, headingDesc: '20 Jan 2022', headSpace: 5, headFontWeight: 500, headTransform: 'capitalize', headingColor: '#101828', subHeadingColor: '#667085', subHeadSpace: 8 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'style-2',
		icon: icons['style-2'],
		title: __( 'Style 2', 'ultimate-addons-for-gutenberg' ),
		attributes: {
			topPaddingDesktop: 150,
			bottomPaddingDesktop: 150,
			leftPaddingDesktop: 150,
			rightPaddingDesktop: 150,
		},
		innerBlocks: [
			[ 'uagb/advanced-heading', { headingAlign: 'center', headingTitleToggle: true, headingDescToggle: true, headingDesc: 'Check out the team dashboard', headingTag: 'h1', headingDescPosition: 'above-heading', headSpace: 24, subHeadSpace: 12, blockTopPadding: 0, blockBottomPadding: 0, headFontWeight: 500, subHeadingColor: '#7F56D9', subHeadFontWeight: 500 }],
			[ 'uagb/advanced-heading', { headingAlign: 'center', headingTitleToggle: false, headingDescToggle: true, blockTopPadding: 0, blockBottomPadding: 0, subHeadSpace: 32, headingDesc: 'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups. Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.' } ],
			[ 'uagb/buttons', {}, [
				[ 'uagb/buttons-child', { label: 'Sign up', backgroundType: 'color', background: '', color: '', topPadding: 12, rightPadding: 20, bottomPadding: 12, leftPadding: 20, btnBorderTopLeftRadius: 8, btnBorderTopRightRadius: 8, btnBorderBottomRightRadius: 8, btnBorderBottomLeftRadius: 8, btnBorderStyle: 'none' } ],
				[ 'uagb/buttons-child', { backgroundType: 'transparent', color: '', showIcon: true, iconPosition: 'after', btnBorderStyle: 'none', topPadding: 0, rightPadding: 0, bottomPadding: 0, leftPadding: 0 } ]
			]]
		],
		scope: [ 'block' ],
	},
	{
		name: 'style-3',
		icon: icons['style-3'],
		title: __( 'Style 3', 'ultimate-addons-for-gutenberg' ),
		attributes: {},
		innerBlocks: [
			[ 'uagb/container', { directionDesktop: 'row' }, [
				[ 'uagb/container', {}, [
					[ 'uagb/image', { 
						url:`${ uagb_blocks_info.uagb_url }/admin/assets/images/uag-placeholder.svg`,
					}],
				]],
				[ 'uagb/container', { alignItemsDesktop: 'left' }, [
					[ 'uagb/advanced-heading', { headingAlign: 'left', headingTitleToggle: true, headingDescToggle: true, headingDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.', headingTag: 'h3', headingDescPosition: 'below-heading', headSpace: 5, subHeadSpace: 20, blockTopPadding: 0, blockBottomPadding: 0}],
					[ 'uagb/star-rating', { starPosition: 'before', title: '(10) Reviews', size: 20, fontWeight: 500, titleColor: '#637381', blockBottomMargin: 24 } ],
					[ 'uagb/advanced-heading', { headingAlign: 'left', headingTitleToggle: true, headingDescToggle: false , headingTag: 'h2', headingTitle: '$59', headSpace: 0, subHeadSpace: 0, blockTopPadding: 0, blockBottomPadding: 24, headFontWeight: 600, subHeadingColor: '#7F56D9', headFontSize: 32 }],
					[ 'uagb/buttons', { align: 'full', stack: 'desktop' }, [
						[ 'uagb/buttons-child', { iconPosition: 'before', backgroundType: '', showIcon: true, icon: 'fa-shopping-cart', label: 'Buy Now', topPadding: 12, rightPadding: 20, bottomPadding: 12, leftPadding: 20, btnBorderTopLeftRadius: 8, btnBorderTopRightRadius: 8, btnBorderBottomRightRadius: 8, btnBorderBottomLeftRadius: 8, btnBorderStyle: 'none', fontWeight: 500} ],
						[ 'uagb/buttons-child', { iconHColor: '#000', hColor: '#000', backgroundType: 'transparent', iconPosition: 'before', showIcon: true, icon: 'heart', label: 'Add to Wishlist', color: '#000', topPadding: 12, rightPadding: 20, bottomPadding: 12, leftPadding: 20, btnBorderTopLeftRadius: 8, btnBorderTopRightRadius: 8, btnBorderBottomRightRadius: 8, btnBorderBottomLeftRadius: 8, btnBorderStyle: 'solid', btnBorderColor: '#D0D5DD', btnBorderTopWidth: 1, btnBorderBottomWidth: 1, btnBorderLeftWidth: 1, btnBorderRightWidth: 1, fontWeight: 500 } ],
					]]
				]]
			]]
		],
		scope: [ 'block' ],
	},
	{
		name: 'style-4',
		icon: icons['style-4'],
		title: __( 'Style 4', 'ultimate-addons-for-gutenberg' ),
		attributes: {
			backgroundType: 'color',
			backgroundColor: '#ffffff',
			boxShadowColor: '#00000021',
			boxShadowHOffset: 0,
			boxShadowVOffset: 12,
			boxShadowBlur: 16,
			boxShadowSpread: -4,
			boxShadowPosition: 'outset',
			topPaddingDesktop: 24,
			bottomPaddingDesktop: 24,
			leftPaddingDesktop: 24,
			rightPaddingDesktop: 24,
			blockBorderStyle: 'default'
		},
		innerBlocks: [
			[ 'uagb/container', { directionDesktop: 'row' }, [
				[ 'uagb/container', { 	innerContentWidth: 'alignfull' ,
										containerBorderTopLeftRadius: 20,
										containerBorderTopRightRadius: 20,
										containerBorderBottomRightRadius: 20,
										containerBorderBottomLeftRadius: 20,
										containerBorderStyle: 'solid',
										containerBorderTopWidth: 1,
										containerBorderBottomWidth: 1,
										containerBorderLeftWidth: 1,
										containerBorderRightWidth: 1,
										containerBorderColor: '#9599A1',
										topPaddingDesktop: 32,
										bottomPaddingDesktop: 32,
										leftPaddingDesktop: 32,
										rightPaddingDesktop: 32,
									}, [
					[ 'uagb/advanced-heading', { separatorColor: '#E6E8EC', subHeadTransform: 'uppercase', separatorWidth: 100, headingAlign: 'center', seperatorStyle: 'solid', headFontWeight: 500, subHeadingColor: '#0B63E5', seperatorPosition: 'below-heading', headingTitleToggle: true, headingDescToggle: true, headingDesc: 'Standard', headingTag: 'h2',headingTitle: '$25/-' , headingDescPosition: 'above-heading', headSpace: 15, subHeadSpace: 12, blockTopPadding: 15, blockBottomPadding: 0 }],
					[ 'uagb/icon-list', { icon_count: 6 , blockTopPadding: 32, blockBottomPadding: 32, label: 'Lorem Ipsum dolor' , icon: 'check-square', align: 'left', iconColor: '#0B63E5'}],
					[ 'uagb/buttons', { align: 'full' }, [
						[ 'uagb/buttons-child', { backgroundType: 'color', background: '', iconHColor: '', hColor: '', showIcon: true, label: 'Choose Plans', color: '', topPadding: 12, rightPadding: 20, bottomPadding: 12, leftPadding: 20, btnBorderTopLeftRadius: 7, btnBorderTopRightRadius: 7, btnBorderBottomRightRadius: 7, btnBorderBottomLeftRadius: 7, btnBorderStyle: 'none' } ],
					]],
				]],
				[ 'uagb/container', { 	innerContentWidth: 'alignfull' ,
										containerBorderTopLeftRadius: 20,
										containerBorderTopRightRadius: 20,
										containerBorderBottomRightRadius: 20,
										containerBorderBottomLeftRadius: 20,
										containerBorderStyle: 'solid',
										containerBorderTopWidth: 1,
										containerBorderBottomWidth: 1,
										containerBorderLeftWidth: 1,
										containerBorderRightWidth: 1,
										containerBorderColor: '#9599A1',
										topPaddingDesktop: 32,
										bottomPaddingDesktop: 32,
										leftPaddingDesktop: 32,
										rightPaddingDesktop: 32,
									}, [
					[ 'uagb/advanced-heading', { separatorColor: '#E6E8EC', subHeadTransform: 'uppercase', separatorWidth: 100, headingAlign: 'center', seperatorStyle: 'solid', headFontWeight: 500, subHeadingColor: '#0B63E5', seperatorPosition: 'below-heading', headingTitleToggle: true, headingDescToggle: true, headingDesc: 'Standard', headingTag: 'h2',headingTitle: '$25/-' , headingDescPosition: 'above-heading', headSpace: 15, subHeadSpace: 12, blockTopPadding: 15, blockBottomPadding: 0 }],
					[ 'uagb/icon-list', { icon_count: 6 , blockTopPadding: 32, blockBottomPadding: 32, label: 'Lorem Ipsum dolor' , icon: 'check-square', align: 'left', iconColor: '#0B63E5'}],
					[ 'uagb/buttons', { align: 'full' }, [
						[ 'uagb/buttons-child', { backgroundType: 'color', background: '', iconHColor: '', hColor: '', showIcon: true, label: 'Choose Plans', color: '', topPadding: 12, rightPadding: 20, bottomPadding: 12, leftPadding: 20, btnBorderTopLeftRadius: 7, btnBorderTopRightRadius: 7, btnBorderBottomRightRadius: 7, btnBorderBottomLeftRadius: 7, btnBorderStyle: 'none' } ],
					]],
				]],
				[ 'uagb/container', { 	innerContentWidth: 'alignfull' ,
										containerBorderTopLeftRadius: 20,
										containerBorderTopRightRadius: 20,
										containerBorderBottomRightRadius: 20,
										containerBorderBottomLeftRadius: 20,
										containerBorderStyle: 'solid',
										containerBorderTopWidth: 1,
										containerBorderBottomWidth: 1,
										containerBorderLeftWidth: 1,
										containerBorderRightWidth: 1,
										containerBorderColor: '#9599A1',
										topPaddingDesktop: 32,
										bottomPaddingDesktop: 32,
										leftPaddingDesktop: 32,
										rightPaddingDesktop: 32,
									}, [
					[ 'uagb/advanced-heading', { separatorColor: '#E6E8EC', subHeadTransform: 'uppercase', separatorWidth: 100, headingAlign: 'center', seperatorStyle: 'solid', headFontWeight: 500, subHeadingColor: '#0B63E5', seperatorPosition: 'below-heading', headingTitleToggle: true, headingDescToggle: true, headingDesc: 'Standard', headingTag: 'h2',headingTitle: '$25/-' , headingDescPosition: 'above-heading', headSpace: 15, subHeadSpace: 12, blockTopPadding: 15, blockBottomPadding: 0 }],
					[ 'uagb/icon-list', { icon_count: 6 , blockTopPadding: 32, blockBottomPadding: 32, label: 'Lorem Ipsum dolor' , icon: 'check-square', align: 'left', iconColor: '#0B63E5'}],
					[ 'uagb/buttons', { align: 'full' }, [
						[ 'uagb/buttons-child', { backgroundType: 'color', background: '', iconHColor: '', hColor: '', showIcon: true, label: 'Choose Plans', color: '', topPadding: 12, rightPadding: 20, bottomPadding: 12, leftPadding: 20, btnBorderTopLeftRadius: 7, btnBorderTopRightRadius: 7, btnBorderBottomRightRadius: 7, btnBorderBottomLeftRadius: 7, btnBorderStyle: 'none' } ],
					]],
				]],
			]]
		],
		scope: [ 'block' ],
	},
	{
		name: 'style-5',
		icon: icons['style-5'],
		title: __( 'Style 5', 'ultimate-addons-for-gutenberg' ),
		attributes: {},
		innerBlocks: [
			[ 'uagb/container', { directionDesktop: 'row' }, [
				[ 'uagb/container', {}, [
					[ 'uagb/image', { 
						url:`${ uagb_blocks_info.uagb_url }/admin/assets/images/uag-placeholder.svg`,
					}],
				]],
				[ 'uagb/container', { alignItemsDesktop: 'left' }, [
					[ 'uagb/blockquote', { skinStyle: 'quotation', enableTweet: false, quoteStyle: 'style_1' , align: 'left', quoteSize: 50, quotePadding: 0, quoteBorderRadius: 100, quoteColor: '#7F56D9', quoteBgColor: '', descFontWeight: 600, descFontStyle: 'default', displayTitle: false , size: 20, quoteBottomMargin: 45, descSpace: 0, descriptionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'} ],
					[ 'uagb/advanced-heading', { subHeadFontWeight: 400, subHeadFontSize: 12, headFontWeight: 800, headingAlign: 'left', headingTitleToggle: true, headingDescToggle: true, headingDesc: 'Senior Research Manager', headingTag: 'h5',headingTitle: 'Name' , headingDescPosition: 'below-heading', headSpace: 5, subHeadSpace: 0, blockTopPadding: 16, blockBottomPadding: 0 }],
					[ 'uagb/star-rating', { align: 'left', displayTitle: false , size: 18 } ],
				]]
			]]
		],
		scope: [ 'block' ],
	}
];

export default variations;

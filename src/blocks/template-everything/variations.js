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
			[ 'uagb/image', { align:'', url:`${ uagb_blocks_info.uagb_url }/admin/assets/images/uag-placeholder.svg`,}],
			[ 'uagb/advanced-heading', { headingAlign: 'left', headingTitleToggle: true, headingDescToggle: true, headingDesc: 'Design', headingTag: 'h3',headingTitle: 'UX Review Presentation' , headingDescPosition: 'above-heading', headSpace: 5, subHeadSpace: 12, blockTopPadding: 15, blockBottomPadding: 0 }],
			[ 'uagb/advanced-heading', { headingAlign: 'left', headingTitleToggle: false, headingDescToggle: true, blockTopPadding: 0, blockBottomPadding: 0, headingDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' } ],
			[ 'uagb/advanced-heading', { headingAlign: 'left', headingTitleToggle: true, headingDescToggle: true, headingTag: 'h6', headingTitle: 'Olivia Rhye', blockTopPadding: 0, blockBottomPadding: 0, headingDesc: '20 Jan 2022', headSpace: 5 } ],
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
			[ 'uagb/advanced-heading', { headingAlign: 'center', headingTitleToggle: true, headingDescToggle: true, headingDesc: 'Check out the team dashboard', headingTag: 'h1',headingTitle: 'Beautiful analytics to grow smarter' , headingDescPosition: 'above-heading', headSpace: 24, subHeadSpace: 12, blockTopPadding: 0, blockBottomPadding: 0, headFontWeight: 500, subHeadingColor: '#7F56D9' }],
			[ 'uagb/advanced-heading', { headingAlign: 'center', headingTitleToggle: false, headingDescToggle: true, blockTopPadding: 0, blockBottomPadding: 0, subHeadSpace: 32, headingDesc: 'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups. Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.' } ],
			[ 'uagb/buttons', {}, [
				[ 'uagb/buttons-child', { backgroundType: 'color', background: '', color: '', topPadding: '', rightPadding: '', bottomPadding: '', leftPadding: '', btnBorderTopLeftRadius: '', btnBorderTopRightRadius: '', btnBorderBottomRightRadius: '', btnBorderBottomLeftRadius: '', btnBorderStyle: 'default' } ],
				[ 'uagb/buttons-child', { backgroundType: 'transparent', color: '#667085', showIcon: true, iconPosition: 'after', btnBorderStyle: 'none' } ]
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
					[ 'uagb/advanced-heading', { headingAlign: 'left', headingTitleToggle: true, headingDescToggle: true, headingDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.', headingTag: 'h3',headingTitle: 'UX Review Presentation' , headingDescPosition: 'below-heading', headSpace: 5, subHeadSpace: 0, blockTopPadding: 15, blockBottomPadding: 0 }],
					[ 'uagb/star-rating', { starPosition: 'before', title: '(10) Reviews', size: 20 } ],
					[ 'uagb/advanced-heading', { headingAlign: 'left', headingTitleToggle: true, headingDescToggle: false , headingTag: 'h2', headingTitle: '$59', headSpace: 0, subHeadSpace: 0, blockTopPadding: 0, blockBottomPadding: 0, headFontWeight: 500, subHeadingColor: '#7F56D9' }],
					[ 'uagb/buttons', { align: 'full' }, [
						[ 'uagb/buttons-child', { backgroundType: 'color', background: '#7F56D9', showIcon: true, icon: 'fa-circle-notch', label: 'Buy Now', color: '#fff', topPadding: 12, rightPadding: 20, bottomPadding: 12, leftPadding: 20, btnBorderTopLeftRadius: 4, btnBorderTopRightRadius: 4, btnBorderBottomRightRadius: 4, btnBorderBottomLeftRadius: 4, btnBorderStyle: 'none' } ],
					]],
					[ 'uagb/buttons', { align: 'full' }, [
						[ 'uagb/buttons-child', { iconHColor: '#000', hColor: '#000', backgroundType: 'transparent', iconPosition: 'before', showIcon: true, icon: 'heart', label: 'Add to Wishlist', color: '#000', topPadding: 12, rightPadding: 20, bottomPadding: 12, leftPadding: 20, btnBorderTopLeftRadius: 4, btnBorderTopRightRadius: 4, btnBorderBottomRightRadius: 4, btnBorderBottomLeftRadius: 4, btnBorderStyle: 'none' } ],
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
			blockBorderTopLeftRadius: 20,
			blockBorderTopRightRadius: 20,
			blockBorderBottomRightRadius: 20,
			blockBorderBottomLeftRadius: 20,
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
			blockBorderStyle: 'solid',
			blockBorderTopWidth: 2,
			blockBorderBottomWidth: 2,
			blockBorderLeftWidth: 2,
			blockBorderRightWidth: 2,
			blockBorderColor: '#0000002E'
		},
		innerBlocks: [
			[ 'uagb/advanced-heading', { headingAlign: 'center', seperatorStyle: 'solid', headFontWeight: 500, subHeadingColor: '#0B63E5', seperatorPosition: 'below-heading', headingTitleToggle: true, headingDescToggle: true, headingDesc: 'Standard', headingTag: 'h2',headingTitle: '$25/-' , headingDescPosition: 'above-heading', headSpace: 15, subHeadSpace: 12, blockTopPadding: 15, blockBottomPadding: 0 }],
			[ 'uagb/icon-list', { icon_count: 6 , blockBottomPadding: 20, Label: 'Lorem Ipsum dolor' , icon: 'check-square', align: 'center', iconColor: '#0B63E5'}],
			[ 'uagb/buttons', { align: 'full' }, [
				[ 'uagb/buttons-child', { backgroundType: 'color', background: '#F0F5FF', iconHColor: '#0B63E5', hColor: '#0B63E5', showIcon: true, label: 'Choose Plans', color: '#0B63E5', topPadding: 12, rightPadding: 20, bottomPadding: 12, leftPadding: 20, btnBorderTopLeftRadius: 4, btnBorderTopRightRadius: 4, btnBorderBottomRightRadius: 4, btnBorderBottomLeftRadius: 4, btnBorderStyle: 'none' } ],
			]],
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
					[ 'uagb/blockquote', { skinStyle: 'quotation', enableTweet: false, quoteStyle: 'style_1' , align: 'left', quoteSize: 25, quotePadding: 15, quoteBorderRadius: 100, quoteColor: '#3D3D3D', displayTitle: false , size: 20, quoteRightMargin: 20, quoteBottomMargin: 15, descSpace: 25, descriptionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'} ],
					[ 'uagb/star-rating', { align: 'left', displayTitle: false , size: 20 } ],
					[ 'uagb/advanced-heading', { headingAlign: 'left', headingTitleToggle: true, headingDescToggle: true, headingDesc: 'Senior Research Manager', headingTag: 'h5',headingTitle: 'Anthony Bahringer' , headingDescPosition: 'below-heading', headSpace: 5, subHeadSpace: 0, blockTopPadding: 15, blockBottomPadding: 0 }],
				]]
			]]
		],
		scope: [ 'block' ],
	}
];

export default variations;

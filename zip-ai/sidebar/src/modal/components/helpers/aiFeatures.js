/**
 * Zip Chat - Helper - The list of possible AI features.
 */

import { sprintf, __ } from '@wordpress/i18n';
import {
	SizeExpandIcon,
	SizeShrinkIcon,
	TranslateIcon,
	SmileyIcon,
	ClipboardCheckIcon,
} from '@Scripts/IconComponents';

// Common styling for filter SVGs.
const commonFilterSvgStyling = {
	color: '#64748b',
};

// Common functionality for all create text labels.
const commonNewTextFunctionality = ( text, setText, generationRef ) => {
	setText( text );
	generationRef?.current?.focus();
}

const languageArray = [
	{ value: 'Arabic', label: __( 'Arabic', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Azerbaijani', label: __( 'Azerbaijani', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Bengali', label: __( 'Bengali', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Belarusian', label: __( 'Belarusian', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Bulgarian', label: __( 'Bulgarian', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Chinese', label: __( 'Chinese (Simplified)', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Croatian', label: __( 'Croatian', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Czech', label: __( 'Czech', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Danish', label: __( 'Danish', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Dutch', label: __( 'Dutch', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'English', label: __( 'English', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Estonian', label: __( 'Estonian', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Finnish', label: __( 'Finnish', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Filipino', label: __( 'Filipino', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'French', label: __( 'French', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Georgian', label: __( 'Georgian', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'German', label: __( 'German', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Greek', label: __( 'Greek', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Hebrew', label: __( 'Hebrew', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Hindi', label: __( 'Hindi', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Hungarian', label: __( 'Hungarian', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Indonesian', label: __( 'Indonesian', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Italian', label: __( 'Italian', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Japanese', label: __( 'Japanese', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Kazakh', label: __( 'Kazakh', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Korean', label: __( 'Korean', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Latvian', label: __( 'Latvian', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Lithuanian', label: __( 'Lithuanian', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Macedonian', label: __( 'Macedonian', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Malay', label: __( 'Malay', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Norwegian', label: __( 'Norwegian', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Polish', label: __( 'Polish', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Portuguese', label: __( 'Portuguese', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Romanian', label: __( 'Romanian', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Russian', label: __( 'Russian', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Serbian', label: __( 'Serbian', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Slovak', label: __( 'Slovak', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Slovenian', label: __( 'Slovenian', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Spanish', label: __( 'Spanish', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Swahili', label: __( 'Swahili', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Swedish', label: __( 'Swedish', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Thai', label: __( 'Thai', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Turkish', label: __( 'Turkish', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Ukrainian', label: __( 'Ukrainian', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Urdu', label: __( 'Urdu', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'Vietnamese', label: __( 'Vietnamese', 'ultimate-addons-for-gutenberg' ) },
];

const tones = [
	{ value: 'friendly', label: __( 'Friendly', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'formal', label: __( 'Formal', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'casual', label: __( 'Casual', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'professional', label: __( 'Professional', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'informative', label: __( 'Informative', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'playful', label: __( 'Playful', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'serious', label: __( 'Serious', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'humorous', label: __( 'Humorous', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'polite', label: __( 'Polite', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'emotional', label: __( 'Emotional', 'ultimate-addons-for-gutenberg' ) },
  ];

// Return the title and an array of all the create text features and their actions on click.
export const newTextFeatures = ( setText, generationRef ) => ( {
	title: __( 'Draft with AI', 'ultimate-addons-for-gutenberg' ),
	filters: [
		{
			feature: __( 'Write an attractive heading about…', 'ultimate-addons-for-gutenberg' ),
			clickEvent: () => { commonNewTextFunctionality(
				__( 'Write an attractive heading about ', 'ultimate-addons-for-gutenberg' ),
				setText,
				generationRef,
			) },
		},
		{
			feature: __( 'Write a sub-heading for…', 'ultimate-addons-for-gutenberg' ),
			clickEvent: () => { commonNewTextFunctionality(
				__( 'Write a sub-heading for ', 'ultimate-addons-for-gutenberg' ),
				setText,
				generationRef,
			) },
		},
	],
} );

// Return the title and an array of all the update text features ( with icons ) and their actions on click.
export const updateTextFeatures = ( generateContent ) => ( {
	filters: [
		{
			icon: ClipboardCheckIcon( commonFilterSvgStyling ),
			feature: __( 'Fix Grammar', 'ultimate-addons-for-gutenberg' ),
			clickEvent: () => {
				generateContent( {
					textCommand: 'Fix the grammar and any spelling mistakes while strictly keeping the same length for this content.',
					oneClickCommand: __( 'Fix any grammatical mistakes.', 'ultimate-addons-for-gutenberg' ),
				} );
			},
		},
		{
			icon: SizeExpandIcon( { width: 14, height: 14, ...commonFilterSvgStyling } ),
			feature: __( 'Make Longer', 'ultimate-addons-for-gutenberg' ),
			clickEvent: () => {
				generateContent( {
					textCommand: 'Rewrite this content by making it 5 to 10 words longer.',
					oneClickCommand: __( 'Make it longer.', 'ultimate-addons-for-gutenberg' ),
				} );
			},
		},
		{
			icon: SizeShrinkIcon( commonFilterSvgStyling ),
			feature: __( 'Make Shorter', 'ultimate-addons-for-gutenberg' ),
			clickEvent: () => {
				generateContent( {
					textCommand: 'Make this content shorter.',
					oneClickCommand: __( 'Make it shorter.', 'ultimate-addons-for-gutenberg' ),
				} );
			},
		},
	],
} );

export const updateAdditionalTextFeatures = ( generateContent ) => ( {
	filters: [
		{
			icon: TranslateIcon( commonFilterSvgStyling ),
			feature: __( 'Translate', 'ultimate-addons-for-gutenberg' ),
			options: languageArray,
			clickEvent: ( language ) => {
				generateContent( {
					textCommand: `Translate to ${ language.value }`,
					/* translators: %s: language name */
					oneClickCommand: sprintf( __( 'Translate to %s.', 'ultimate-addons-for-gutenberg' ), language.label ),
				} );
			},
		},
		{
			icon: SmileyIcon( commonFilterSvgStyling ),
			feature: __( 'Change Tone', 'ultimate-addons-for-gutenberg' ),
			options: tones,
			clickEvent: ( tone ) => {
				generateContent( {
					textCommand: `Rewrite in ${ tone.value } tone, Generate content in exactly same length as this content and in same language.`,
					/* translators: %s: tone name */
					oneClickCommand: sprintf( __( 'Change tone to %s.', 'ultimate-addons-for-gutenberg' ), tone.label ),
				} );
			},
		},
	]
} );

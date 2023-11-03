import { select } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';
import { BlockControls } from '@wordpress/block-editor';
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { ZipWPLogo } from '@Scripts/IconComponents';
import './styling.scss';

import { applyFormat, replace, registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { __ } from '@wordpress/i18n';
import ZipChatSidebar from './modal/Modal';
const name = 'zipai/chat';
const cssClass = 'zip-ai-highlighted';

const AIExtension = ( props ) => {

	// Destructure the required props.
	const {
		onChange,
		value = { text: '' },
		isRichText = true,
	} = props;

	// Set the required variables.
	const [ isOpen, setIsOpen ] = useState( false );
	const [ isActiveFormatAI, setActiveFormatAI ] = useState( false );

	// First run functionality.
	useEffect( () => {
		// If this is not a RichText, check if the sidebar should open.
		if ( ! isRichText ) {
			shouldOpenModal();
		}
	}, [] );

	// Highlight the selected RichText if required.
	useEffect( () => {
		if ( ! isRichText ) {
			return;
		}
		if ( ! isOpen && isActiveFormatAI ) {
			let AIContent = { ...value };
			AIContent.end =  AIContent.text.length;
			AIContent = toggleFormat( AIContent, { type: name } );
			onChange( AIContent );
			setActiveFormatAI( false );
		}
	}, [ isOpen ] );

	// Function to update the RichText content.
	const updateAIContent = ( content ) => {
		let AIContent = { ...value };
		AIContent = replace( value, value.text, content );
		onChange( AIContent );
	};

	// Function to check if the modal should be opened or an error should be displayed.
	const shouldOpenModal = () => {
		setIsOpen( true );
	};

	// Function to check for default values.
	const checkForDefaultValues = ( text ) => {

		if ( ! isRichText ) {
			return '';
		}

		const defaultValues = [
			'Your Attractive Heading',
			'Engage Your Visitors',
		];

		if ( defaultValues.includes( text ) ) {
			return '';
		}

		let AIContent = { ...value };
		if ( ( AIContent.start !== 0 || AIContent.end !== AIContent.text.length ) && ! isActiveFormatAI ) {
			AIContent.start = 0;
			AIContent.end = AIContent.text.length;
			AIContent = applyFormat( AIContent, {
				type: name
			} );
			onChange( AIContent );
			setActiveFormatAI( true );
		}

		return text;
	};

	return (
		<>
			{ isRichText ? (
				<BlockControls>
					<Toolbar className="zip-ai-toolbar" label="Zip AI">
						<ToolbarButton
							onClick={ shouldOpenModal }
							icon={ ZipWPLogo() }
							label={ __( 'Zip - AI Assistant', 'ultimate-addons-for-gutenberg' ) }
						/>
					</Toolbar>
				</BlockControls>
			) : <></> }
			{ isOpen && (
				<ZipChatSidebar
					setIsOpen={ setIsOpen }
					isRichText={ isRichText }
					updateContent={ isRichText ? updateAIContent : null }
					currentText={ checkForDefaultValues( value.text ) }
				/>
			) }

		</>
	);
};

// The AI Sidebar Panel Button.
const SidebarTrigger = () => (
	<>
		{ /* Page Settings Icon. */ }
		<PluginSidebarMoreMenuItem target="zip-ai-page-settings-panel" icon={ ZipWPLogo() }>
			{ __( 'Zip - AI Assistant', 'ultimate-addons-for-gutenberg' ) }
		</PluginSidebarMoreMenuItem>

		{ /* Page Settings Area. */ }
		<PluginSidebar
			isPinnable={ true }
			icon={ ZipWPLogo() }
			name="zip-ai-page-settings-panel"
			title={ __( 'Zip - AI Assistant', 'ultimate-addons-for-gutenberg' ) }
			className={ 'zip-ai-sidebar' }
		>
			<AIExtension { ...{ isRichText: false } } />
		</PluginSidebar>
	</>
);

// Register the required codes only if needed.
if ( zip_ai_react?.is_zip_chat_enabled ) {
	// Register the AI Format Type for Rich Texts.
	registerFormatType( name, {
		tagName: 'span',
		className: cssClass,
		edit: AIExtension,
		title: __( 'Zip AI', 'ultimate-addons-for-gutenberg' ),
	} );

	// Register the sidebar if this is the editor.
	if ( select( 'core/editor' ) ) {
		registerPlugin( 'zip-ai-page-level-settings', { render: SidebarTrigger } );
	}

	// Function to remove the locally stored chatlog if it exists.
	const clearStoredChatLog = () => {
		localStorage.removeItem( `zipAiPreservedChatlog${ zip_ai_react?.current_post_id }` );
	};

	// Remove the locally stored chatlog on page unload.
	window.addEventListener( 'beforeunload', clearStoredChatLog );
}
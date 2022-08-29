import apiFetch from '@wordpress/api-fetch';

const setInitialState = ( store ) => {
    apiFetch( {
        path: '/uag/v1/admin/commonsettings/',
    } ).then( ( data ) => {
        const initialState = {
            initialStateSetFlag : true,
            activeBlocksFilterTab : 'all',
            activeSettingsNavigationTab : 'global-settings',
			settingsSavedNotification: false,
            blocksStatuses : data.blocks_activation_and_deactivation,
            enableFileGeneration : data.enable_file_generation,
            enableTemplates : data.enable_templates_button,
            enableBeta : data.enable_beta_updates,
			enableLegacyBlocks: data.enable_legacy_blocks,
            enableSelectedFontFamilies : data.load_select_font_globally,
            selectedFontFamilies :  data.select_font_globally,
            enableLoadFontsLocally : data.load_gfonts_locally,
            enablePreloadLocalFonts : data.preload_local_fonts,
            enableCollapsePanels : data.collapse_panels,
            enableCopyPasteStyles : data.copy_paste,
            enableDisplayConditions: data.enable_block_condition,
            enableMasonryExtension: data.enable_masonry_gallery,
			enableResponsiveConditions: data.enable_block_responsive,
			contentWidth: data.content_width,
			siteKeyV2: data.recaptcha_site_key_v2,
			secretKeyV2: data.recaptcha_secret_key_v2,
			siteKeyV3: data.recaptcha_site_key_v3,
			secretKeyV3: data.recaptcha_secret_key_v3,
			enableComingSoonMode: data.enable_coming_soon_mode,
			comingSoonPage: data.coming_soon_page,
			blocksEditorSpacing: data.blocks_editor_spacing,
			containerGlobalPadding: data.container_global_padding,
			containerGlobalElementsGap: data.container_global_elements_gap,
			enableFontAwesome5: data.load_font_awesome_5,
			enableAutoBlockRecovery: data.auto_block_recovery,
        };

        store.dispatch( {type: 'UPDATE_INITIAL_STATE', payload: initialState} );

    } );
};

export default setInitialState;

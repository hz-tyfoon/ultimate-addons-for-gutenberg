/**
 * Block Icon : Settings.
 */
import { memo } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import GeneralSettings from './components/settings/GeneralSettings';
import StyleSettings from './components/settings/StyleSettings';
import GlobalBlockStyles from '@Components/global-block-link';

const Settings = ( props ) => {
	const styling = props.styling;
	return (
		<InspectorControls>
			<InspectorTabs>
				<InspectorTab { ...UAGTabs.general }>
					<GlobalBlockStyles
						parentProps={props}
						styling={styling}
					/>
					<GeneralSettings { ...props } />
				</InspectorTab>
				<InspectorTab { ...UAGTabs.style }>
					<StyleSettings { ...props } />
				</InspectorTab>
				<InspectorTab
					{ ...UAGTabs.advance }
					parentProps={ props }
				></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);
};
export default memo( Settings );

/**
 * BLOCK: Call To Action - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';

// Import icon.
import Title from './components/Title';
import Description from './components/Description';
import CTA from './components/CallToActionNew';

export default function save( props ) {
	const {
		ctaPosition,
		block_id,
		ctaType,
		ctaLink,
		ctaTarget,
		ctaTitle,
		description,
		showTitle,
		showDesc,
		stack
	} = props.attributes;
	const isCta = (
		<CTA attributes={ props.attributes } setAttributes="not_set" />
	);

	// Get description and seperator components.
	const desc = (
		<>
			{ '' !== description && (
				<Description
					attributes={ props.attributes }
					setAttributes="not_set"
				/>
			) }
		</>
	);

	// Get Title components.
	const titleText = (
		<>
			{ '' !== ctaTitle && (
				<Title
					attributes={ props.attributes }
					setAttributes="not_set"
				/>
			) }
		</>
	);

	const output = (
		<>
			{ ctaPosition === 'below-title' && (
				<>
					{ showTitle && titleText }
							{ showDesc && desc }
							{ isCta }
				</>
			) }
			{ ( ctaPosition === 'right' ) && (
				<>
					<div className="uagb-cta__wrap">
					{ showTitle && titleText }
							{ showDesc && desc }
					</div>
					{isCta}
				</>
			) }
		</>
	);

	let target = '';
	if ( ctaTarget ) {
		target = '_blank';
	}

	let stackContent;
	if ( ctaPosition === 'right' && stack !== 'none' ) {
		stackContent = 'uagb-cta__content-stacked-' + stack + ' ';
	}

	return (
		<div
			className={ classnames(
				`uagb-block-${ block_id }`,
				'button' === ctaType ? 'wp-block-button' : '',
				stackContent
			) }
		>
			{ ctaType === 'all' && (
				<>
				<a
					href={ ctaLink }
					className="uagb-cta__link-to-all"
					target={ target }
					rel="noopener noreferrer"
				>
				</a>
				{ output }
				</>
			) }
			{ ctaType !== 'all' && output }
		</div>
	);
}

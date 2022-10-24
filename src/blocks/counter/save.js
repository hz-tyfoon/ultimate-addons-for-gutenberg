import React from 'react';
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import CounterIcon from './component/CounterIcon';

export default function Save( props ) {
	const {attributes} = props;

	const {
		block_id,
		layout,
		heading,
		numberPrefix,
		numberSuffix,
		startNumber,
		endNumber,
		animationDuration,
		thousandSeparator,
		circleSize,
		icon,
		showIcon,
		iconImgPosition,
	} = attributes

	const blockName = 'counter'; // Since props.name property isn't available, we need to hard-code the block's name.

	const startFallback = getFallbackNumber( startNumber, 'startNumber', 'counter' );
	const endFallback = getFallbackNumber( endNumber, 'endNumber', 'counter' );

	const circleSizeFallback = getFallbackNumber( circleSize, 'circleSize', blockName );

	const circlePos    = ( circleSizeFallback / 2 );
	const circleRadius = circlePos - 10;
	const circleDash   = parseFloat( 2 * Math.PI * circleRadius ).toFixed( 2 );

	const iconCheck = ( showIcon && icon !== '' ); // Reusable const to check if icon is set and enabled.

	let iconComponent = '';

	if ( icon !== '' ) {
		iconComponent = <CounterIcon attributes={attributes} />
	}

	const title = (
		<RichText.Content
			tagName="div"
			className="wp-block-uagb-counter__title"
			value={ heading }
		/>
	)

	const number = (
		<>
		{iconCheck && layout==='number' && iconImgPosition === 'top' && iconComponent}
		<div className="wp-block-uagb-counter__number">
			{iconCheck && layout==='number' && iconImgPosition === 'left-number' && iconComponent}
			{
				numberPrefix && ( <span className="uagb-counter-block-prefix">{numberPrefix}</span> )
			}
			<span className="uagb-counter-block-number" data-duration={ animationDuration / 1000 } data-to-value={endFallback} data-from-value={startFallback} data-delimiter={thousandSeparator}></span>
			{
				numberSuffix && ( <span className="uagb-counter-block-suffix">{numberSuffix}</span> )
			}
			{iconCheck && layout==='number' && iconImgPosition === 'right-number' && iconComponent}
		</div>
		{layout === 'number' && title}
		{iconCheck && layout==='number' && iconImgPosition === 'bottom' && iconComponent}
		</>
	);

	const bars = (
		<div className='wp-block-uagb-counter-bars-container'>
			{number}
		</div>
	)

	const circle = (
		<div className="wp-block-uagb-counter-circle-container">
			<div className='wp-block-uagb-counter-circle-container__content'>
				{ ( iconCheck && iconImgPosition === 'top' ) && iconComponent }
				{number}
				{title}
				{ ( iconCheck && iconImgPosition === 'bottom' ) && iconComponent }
			</div>
			<svg viewPort={`0 0 ${circleSizeFallback} ${circleSizeFallback}`} version="1.1" xmlns="http://www.w3.org/2000/svg">
				<circle className='wp-block-uagb-counter-circle-container__background-circle'></circle>
				<circle id="bar" fill="transparent" strokeDasharray={circleDash} strokeDashoffset={circleDash}></circle>
			</svg>
		</div>
	)

	return (
			<div className={ classnames(
				props.className,
				`uagb-block-${ block_id }`,
				'wp-block-uagb-counter',
				`wp-block-uagb-counter--${ layout }`,
			) }>
				{
					layout === 'number' && number
				}
				{
					layout === 'bars' && bars
				}
				{
					layout === 'circle' && circle
				}
				{
					layout !== 'circle' && layout !== 'number' && title
				}
			</div>
	);
}

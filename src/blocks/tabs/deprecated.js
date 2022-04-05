/**
 * BLOCK: Tabs - Deprecated Block
 */

import classnames from 'classnames';
import renderSVG from '@Controls/deprecatedRenderIcon';
import attributes from './attributes';
import { RichText, InnerBlocks } from '@wordpress/block-editor';

const deprecated = [
	{
		attributes,
		save( props ) {
			const { className } = props;
			const {
				block_id,
				tabHeaders,
				tabActiveFrontend,
				tabsStyleD,
				tabsStyleT,
				tabsStyleM,
				icon,
				showIcon,
				iconPosition,
			} = props.attributes;

			return (
				<div
					className={ classnames(
						className,
						`uagb-block-${ block_id }`,
						`uagb-tabs__wrap`,
						`uagb-tabs__${ tabsStyleD }-desktop`,
						`uagb-tabs__${ tabsStyleT }-tablet`,
						`uagb-tabs__${ tabsStyleM }-mobile`
					) }
					data-tab-active={ tabActiveFrontend }
				>
					<ul className="uagb-tabs__panel">
						{ tabHeaders.map( ( header, index ) => (
							<li key={ index } className="uagb-tab">
								<a
									href={ `#uagb-tabs__tab${ index }` }
									className={ `uagb-tabs__icon-position-${ iconPosition }` }
								>
									{ showIcon &&
										( iconPosition === 'left' ||
											iconPosition === 'top' ) && (
											<span className="uagb-tabs__icon">
												{ renderSVG( icon ) }
											</span>
										) }
									<RichText.Content
										tagName={ 'span' }
										value={ header }
									/>
									{ showIcon &&
										( iconPosition === 'right' ||
											iconPosition === 'bottom' ) && (
											<span className="uagb-tabs__icon">
												{ renderSVG( icon ) }
											</span>
										) }
								</a>
							</li>
						) ) }
					</ul>
					<div className="uagb-tabs__body-wrap">
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const { attributes, className } = props;
			const {
				block_id,
				tabHeaders,
				tabActiveFrontend,
				tabsStyleD,
				tabsStyleT,
				tabsStyleM,
				icon,
				showIcon,
				iconPosition,
				tabAlign,
			} = attributes;

			return (
				<div
					className={ classnames(
						className,
						`uagb-block-${ block_id }`,
						'uagb-tabs__wrap',
						`uagb-tabs__${ tabsStyleD }-desktop`,
						`uagb-tabs__${ tabsStyleT }-tablet`,
						`uagb-tabs__${ tabsStyleM }-mobile`
					) }
					data-tab-active={ tabActiveFrontend }
				>
					<ul className={ `uagb-tabs__panel uagb-tabs__align-${ tabAlign }` }>
						{ tabHeaders.map( ( header, index ) => (
							<li
								key={ index }
								className={ `uagb-tab ${
									tabActiveFrontend === index
										? 'uagb-tabs__active'
										: ''
								}` }
							>
								<a
									href={ `#uagb-tabs__tab${ index }` }
									className={ `uagb-tabs-list uagb-tabs__icon-position-${ iconPosition }` }
									data-tab={ index }
								>
									{ showIcon &&
										( iconPosition === 'left' ||
											iconPosition === 'top' ) && (
											<span className="uagb-tabs__icon">
												{ renderSVG( icon ) }
											</span>
										) }
									<RichText.Content
										tagName={ 'span' }
										value={ header }
									/>
									{ showIcon &&
										( iconPosition === 'right' ||
											iconPosition === 'bottom' ) && (
											<span className="uagb-tabs__icon">
												{ renderSVG( icon ) }
											</span>
										) }
								</a>
							</li>
						) ) }
					</ul>
					<div className="uagb-tabs__body-wrap">
						<InnerBlocks.Content />
					</div>
				</div>
			);
		}
	}
];

export default deprecated;

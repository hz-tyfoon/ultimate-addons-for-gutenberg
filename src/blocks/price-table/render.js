import { RichText, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import React , { useLayoutEffect } from 'react';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';
import classnames from 'classnames';

const Render = ( props ) => {
	props = props.parentProps;
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { attributes, setAttributes, className } = props;

    const {
        block_id,
        content,
        email,
        description,
        support,
        price,
    } = attributes;

    const deviceType = useDeviceType();
    
    const onEdit = ( newContent ) => {
        setAttributes( { content: newContent } );
    }

    const onDescChange = ( newDesc ) => {
        setAttributes( { description: newDesc } );
    }

    const onSupChange = ( newSup ) => {
        setAttributes( { support: newSup } );
    }

    const onEmailChange = ( newEmail ) => {
        setAttributes( { email: newEmail } );
    }

    const onPriceChange = ( newPrice ) => {
        setAttributes( { price: newPrice } );
    }
    
    return (
        (
            <div className={ classnames(
                'container',
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }>
                <div className='box'>
                <RichText
                        tagName="h4"
                        className='box__title'
                        onChange={ onEdit }
                        value={ content}
                        placeholder= {__( 'PERSONAL EDITION','my-guten-block-plugin' )}
                    />
                    <RichText
                        tagName="p"
                        className='box__description'
                        onChange={ onDescChange }
                        value={ description}
                        placeholder = {__( 'Auctor condimentum vero, solutauld hilvil similique, nisl proin augue? Accumsan interdum etiam', 'my-guten-block-plugin' )}
                    />
                    <ul className='box-list'>
                        <RichText
                            tagName="li"
                            className='box-list__support'
                            onChange={ onSupChange }
                            value={ support}
                            placeholder = {__( '> Free Support 24/7','my-guten-block-plugin' )}
                        />
                        <RichText
                            tagName="li"
                            className='box-list__email'
                            onChange={ onEmailChange }
                            value={ email}
                            placeholder= {__( '> Maintenance Email','my-guten-block-plugin' )}
                        />
                    </ul>
                    <section className='box-prsec'>
                        <span> <s> $9.99 </s> </span>
                        <RichText
                            tagName="h2"
                            className='box-prsec__prc'
                            onChange={ onPriceChange }
                            value={ price}
                            placeholder= {__( '$19.99','my-guten-block-plugin' )}
                        />
                    </section>
                    <InnerBlocks />
                </div>
            </div>
        )
    );
};
export default React.memo( Render );

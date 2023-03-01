import { RichText, InnerBlocks } from '@wordpress/block-editor';
import React from 'react';
import classnames from 'classnames';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup.
 *
 * @param {Object} props            Properties passed to the function.
 * 
 * @return {WPElement} Element to render.
 */
const Save = ( props ) => {
	//props = props.parentProps;
    
	const { attributes } = props;

    const {
        block_id,
        content,
        email,
        description,
        support,
        price,

    } = attributes;

    return (
        (
            <div  className={ classnames(
				props.className,
				`uagb-block-${ block_id }`
			) }>
                <div className='box'>
                <RichText.Content
                        tagName="h4"
                        className='box__title'
                        value={ content }
                    />
                    <RichText.Content
                        tagName="p"
                        className='box__description'
                        value={ description }
                    />
                    <ul className='box-list'>
                        <RichText.Content
                            tagName="li"
                            className='box-list__support'
                            value={ support }
                        />
                        <RichText.Content
                            tagName="li"
                            className='box-list__email'
                            value={ email }
                        />
                    </ul>
                    <section className='box-prsec'>
                        <span> <s> $9.99 </s> </span>
                        <RichText.Content
                            tagName="h2"
                            className='box-prsec__prc'
                            value={ price }
                        />
                    </section>
                    <div>
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        )
    );
};


export default Save;
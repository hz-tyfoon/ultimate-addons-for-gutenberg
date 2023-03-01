import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';


function styling( props ) {

    const {
        
        //text align
        textAlign,
        textAlignTablet,
        textAlignMobile,

        //title typography
        titleFontFamily,
        titleFontWeight,
        titleFontStyle,
        titleFontSize,
        titleFontSizeType,
        titleFontSizeTablet,
        titleFontSizeMobile,
        titleTransform,
        titleDecoration,
        titleLineHeight,
        titleLineHeightType,
        titleLineHeightTablet,
        titleLineHeightMobile,
        titleLetterSpacing,
        titleLetterSpacingType,
        titleLetterSpacingTablet,
        titleLetterSpacingMobile,

        // title color
        titleFontColor,

    } = props.attributes;

    const selectors = {
        ' .box':{
            'text-align': textAlign
        },
        ' .box__title':{
            'color': titleFontColor,
            'font-family': titleFontFamily,
            'font-size': generateCSSUnit(
                titleFontSize,
                titleFontSizeType
            ),
            'font-weight': titleFontWeight,
            'font-style': titleFontStyle,
            'text-transform': titleTransform,
            'text-decoration': titleDecoration,
            'line-height': generateCSSUnit(
				titleLineHeight,
				titleLineHeightType
			),
            'letter-spacing': generateCSSUnit(
                titleLetterSpacing,
                titleLetterSpacingType
            ),
        }
    }
    const Mobselectors = {
        ' .box':{
            'text-align': textAlignTablet,
            'font-family': titleFontFamily,
            'font-size': generateCSSUnit(
                titleFontSizeMobile,
                titleFontSizeType
            ),
            'font-weight': titleFontWeight,
            'font-style': titleFontStyle,
            'text-transform': titleTransform,
            'text-decoration': titleDecoration,
            'line-height': generateCSSUnit(
				titleLineHeightMobile,
				titleLineHeightType
			),
            'letter-spacing': generateCSSUnit(
                titleLetterSpacingMobile,
                titleLetterSpacingType
            ),
        }
    }
    const Tabselectors = {
        ' .box':{
            'text-align': textAlignMobile,
            'font-family': titleFontFamily,
            'font-size': generateCSSUnit(
                titleFontSizeTablet,
                titleFontSizeType
            ),
            'font-weight': titleFontWeight,
            'font-style': titleFontStyle,
            'text-transform': titleTransform,
            'text-decoration': titleDecoration,
            'line-height': generateCSSUnit(
				titleLineHeightTablet,
				titleLineHeightType
			),
            'letter-spacing': generateCSSUnit(
                titleLetterSpacingTablet,
                titleLetterSpacingType
            ),
        }
    }
   

    let stylingCss = '';

	const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;
    stylingCss = generateCSS( selectors, id );
    stylingCss += generateCSS(
		Tabselectors,
		`${ id }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		Mobselectors,
		`${ id }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);
    return stylingCss;
}

export default styling;
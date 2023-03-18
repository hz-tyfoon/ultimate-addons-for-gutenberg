const getGBSEditorStyles = ( globalBlockStyles, globalBlockStyleId, globalBlockStyleName ) => {
    let editorStyles = '';
    for ( const style of globalBlockStyles ) {
        if ( style?.value === globalBlockStyleId && style?.label === globalBlockStyleName ) {
            editorStyles = style?.editorStyles
            break;
        }
    }
    return editorStyles;
};

export default getGBSEditorStyles;
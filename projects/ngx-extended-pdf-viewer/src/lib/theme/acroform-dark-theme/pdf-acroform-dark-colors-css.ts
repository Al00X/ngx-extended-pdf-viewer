export const css=`:root{--form-anchor-hover-color: rgba(255, 255, 0, 1);--annotation-unfocused-field-background: unset;--form-widget-border-color: lightgrey;--form-widget-color: lightgrey;--form-widget-background-color: black;--form-check-color: lightgrey;--annotation-popup-background-color: rgba(255, 255, 153, 1);--annotation-popup-shadow-color: rgba(136, 136, 136, 1);--annotation-popup-border-top-color: lightgrey;--xfa-layer-highlight: rgba(239, 203, 237, 1);--xfa-unfocused-field-background: url("data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>");--xfa-highlight-selected-background-color: rgba(203, 223, 203, 1);--xfa-selection-background-color: rgba(0, 0, 255, 1)} :root{--annotation-unfocused-field-background: url("data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>")}@media(forced-colors: active){.annotationLayer .textWidgetAnnotation input:required,.annotationLayer .textWidgetAnnotation textarea:required,.annotationLayer .choiceWidgetAnnotation select:required,.annotationLayer .buttonWidgetAnnotation.checkBox input:required,.annotationLayer .buttonWidgetAnnotation.radioButton input:required{outline:1.5px solid selectedItem}}.annotationLayer{position:absolute;top:0;left:0;pointer-events:none;transform-origin:0 0}.annotationLayer section{position:absolute;text-align:initial;pointer-events:auto;box-sizing:border-box;transform-origin:0 0}.annotationLayer .linkAnnotation>a,.annotationLayer .buttonWidgetAnnotation.pushButton>a{position:absolute;font-size:1em;top:0;left:0;width:100%;height:100%}.annotationLayer .buttonWidgetAnnotation.pushButton>canvas{width:100%;height:100%}.annotationLayer .linkAnnotation>a:hover,.annotationLayer .buttonWidgetAnnotation.pushButton>a:hover{opacity:.2;background:#ff0;box-shadow:0 2px 10px #ff0}.annotationLayer .textAnnotation img{position:absolute;cursor:pointer;width:100%;height:100%}.annotationLayer .textWidgetAnnotation input,.annotationLayer .textWidgetAnnotation textarea,.annotationLayer .choiceWidgetAnnotation select,.annotationLayer .buttonWidgetAnnotation.checkBox input,.annotationLayer .buttonWidgetAnnotation.radioButton input{background-image:var(--annotation-unfocused-field-background);border:1px solid rgba(0,0,0,0);box-sizing:border-box;font:calc(9px*var(--scale-factor)) sans-serif;height:100%;margin:0;vertical-align:top;width:100%}.annotationLayer .textWidgetAnnotation input:required,.annotationLayer .textWidgetAnnotation textarea:required,.annotationLayer .choiceWidgetAnnotation select:required,.annotationLayer .buttonWidgetAnnotation.checkBox input:required,.annotationLayer .buttonWidgetAnnotation.radioButton input:required{outline:1.5px solid red}.annotationLayer .choiceWidgetAnnotation select option{padding:0}.annotationLayer .buttonWidgetAnnotation.radioButton input{border-radius:50%}.annotationLayer .textWidgetAnnotation textarea{resize:none}.annotationLayer .textWidgetAnnotation input[disabled],.annotationLayer .textWidgetAnnotation textarea[disabled],.annotationLayer .choiceWidgetAnnotation select[disabled],.annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],.annotationLayer .buttonWidgetAnnotation.radioButton input[disabled]{background:none;border:1px solid rgba(0,0,0,0);cursor:not-allowed}.annotationLayer .textWidgetAnnotation input:hover,.annotationLayer .textWidgetAnnotation textarea:hover,.annotationLayer .choiceWidgetAnnotation select:hover,.annotationLayer .buttonWidgetAnnotation.checkBox input:hover,.annotationLayer .buttonWidgetAnnotation.radioButton input:hover{border:1px solid #000}.annotationLayer .textWidgetAnnotation input:focus,.annotationLayer .textWidgetAnnotation textarea:focus,.annotationLayer .choiceWidgetAnnotation select:focus{background:none;border:1px solid rgba(0,0,0,0)}.annotationLayer .textWidgetAnnotation input :focus,.annotationLayer .textWidgetAnnotation textarea :focus,.annotationLayer .choiceWidgetAnnotation select :focus,.annotationLayer .buttonWidgetAnnotation.checkBox :focus,.annotationLayer .buttonWidgetAnnotation.radioButton :focus{background-image:none;background-color:rgba(0,0,0,0);outline:auto}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{background-color:CanvasText;content:"";display:block;position:absolute}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{height:80%;left:45%;width:1px}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{transform:rotate(45deg)}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{transform:rotate(-45deg)}.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{border-radius:50%;height:50%;left:30%;top:20%;width:50%}.annotationLayer .textWidgetAnnotation input.comb{font-family:monospace;padding-left:2px;padding-right:0}.annotationLayer .textWidgetAnnotation input.comb:focus{width:103%}.annotationLayer .buttonWidgetAnnotation.checkBox input,.annotationLayer .buttonWidgetAnnotation.radioButton input{appearance:none}.annotationLayer .popupTriggerArea{height:100%;width:100%}.annotationLayer .popupWrapper{position:absolute;font-size:calc(9px*var(--scale-factor));width:100%;min-width:calc(180px*var(--scale-factor));pointer-events:none}.annotationLayer .popup{position:absolute;z-index:200;max-width:calc(180px*var(--scale-factor));background-color:#ff9;box-shadow:0 calc(2px*var(--scale-factor)) calc(5px*var(--scale-factor)) #888;border-radius:calc(2px*var(--scale-factor));padding:calc(6px*var(--scale-factor));margin-left:calc(5px*var(--scale-factor));cursor:pointer;font:message-box;white-space:normal;word-wrap:break-word;pointer-events:auto}.annotationLayer .popup>*{font-size:calc(9px*var(--scale-factor))}.annotationLayer .popup h1{display:inline-block}.annotationLayer .popupDate{display:inline-block;margin-left:calc(5px*var(--scale-factor))}.annotationLayer .popupContent{border-top:1px solid #333;margin-top:calc(2px*var(--scale-factor));padding-top:calc(2px*var(--scale-factor))}.annotationLayer .richText>*{white-space:pre-wrap;font-size:calc(9px*var(--scale-factor))}.annotationLayer .highlightAnnotation,.annotationLayer .underlineAnnotation,.annotationLayer .squigglyAnnotation,.annotationLayer .strikeoutAnnotation,.annotationLayer .freeTextAnnotation,.annotationLayer .lineAnnotation svg line,.annotationLayer .squareAnnotation svg rect,.annotationLayer .circleAnnotation svg ellipse,.annotationLayer .polylineAnnotation svg polyline,.annotationLayer .polygonAnnotation svg polygon,.annotationLayer .caretAnnotation,.annotationLayer .inkAnnotation svg polyline,.annotationLayer .stampAnnotation,.annotationLayer .fileAttachmentAnnotation{cursor:pointer}.annotationLayer section svg{position:absolute;width:100%;height:100%} .xfaLayer .highlight{margin:-1px;padding:1px;background-color:var(--xfa-layer-highlight);border-radius:4px}.xfaLayer .highlight.appended{position:initial}.xfaLayer .highlight.begin{border-radius:4px 0 0 4px}.xfaLayer .highlight.end{border-radius:0 4px 4px 0}.xfaLayer .highlight.middle{border-radius:0}.xfaLayer .highlight.selected{background-color:var(--xfa-highlight-selected-background-color)}.xfaLayer ::selection{background:var(--xfa-selection-background-color)}.xfaPage{overflow:hidden;position:relative}.xfaContentarea{position:absolute}.xfaPrintOnly{display:none}.xfaLayer{position:absolute;text-align:initial;top:0;left:0;transform-origin:0 0;line-height:1.2}.xfaLayer *{color:inherit;font:inherit;font-style:inherit;font-weight:inherit;font-kerning:inherit;letter-spacing:-0.01px;text-align:inherit;text-decoration:inherit;box-sizing:border-box;background-color:rgba(0,0,0,0);padding:0;margin:0;pointer-events:auto;line-height:inherit}.xfaLayer div{pointer-events:none}.xfaLayer svg{pointer-events:none}.xfaLayer svg *{pointer-events:none}.xfaLayer a{color:blue}.xfaRich li{margin-left:3em}.xfaFont{color:#000;font-weight:normal;font-kerning:none;font-size:10px;font-style:normal;letter-spacing:0;text-decoration:none;vertical-align:0}.xfaCaption{overflow:hidden;flex:0 0 auto}.xfaCaptionForCheckButton{overflow:hidden;flex:1 1 auto}.xfaLabel{height:100%;width:100%}.xfaLeft{display:flex;flex-direction:row;align-items:center}.xfaRight{display:flex;flex-direction:row-reverse;align-items:center}.xfaLeft>.xfaCaption,.xfaLeft>.xfaCaptionForCheckButton,.xfaRight>.xfaCaption,.xfaRight>.xfaCaptionForCheckButton{max-height:100%}.xfaTop{display:flex;flex-direction:column;align-items:flex-start}.xfaBottom{display:flex;flex-direction:column-reverse;align-items:flex-start}.xfaTop>.xfaCaption,.xfaTop>.xfaCaptionForCheckButton,.xfaBottom>.xfaCaption,.xfaBottom>.xfaCaptionForCheckButton{width:100%}.xfaBorder{background-color:rgba(0,0,0,0);position:absolute;pointer-events:none}.xfaWrapped{width:100%;height:100%}.xfaTextfield:focus,.xfaSelect:focus{background-image:none;background-color:rgba(0,0,0,0);outline:auto;outline-offset:-1px}.xfaCheckbox:focus,.xfaRadio:focus{outline:auto}.xfaTextfield,.xfaSelect{height:100%;width:100%;flex:1 1 auto;border:none;resize:none;background-image:var(--xfa-unfocused-field-background)}.xfaTop>.xfaTextfield,.xfaTop>.xfaSelect,.xfaBottom>.xfaTextfield,.xfaBottom>.xfaSelect{flex:0 1 auto}.xfaButton{cursor:pointer;width:100%;height:100%;border:none;text-align:center}.xfaLink{width:100%;height:100%;position:absolute;top:0;left:0}.xfaCheckbox,.xfaRadio{width:100%;height:100%;flex:0 0 auto;border:none}.xfaRich{white-space:pre-wrap;width:100%;height:100%}.xfaImage{object-position:left top;object-fit:contain;width:100%;height:100%}.xfaLrTb,.xfaRlTb,.xfaTb{display:flex;flex-direction:column;align-items:stretch}.xfaLr{display:flex;flex-direction:row;align-items:stretch}.xfaRl{display:flex;flex-direction:row-reverse;align-items:stretch}.xfaTb>div{justify-content:left}.xfaPosition{position:relative}.xfaArea{position:relative}.xfaValignMiddle{display:flex;align-items:center}.xfaTable{display:flex;flex-direction:column;align-items:stretch}.xfaTable .xfaRow{display:flex;flex-direction:row;align-items:stretch}.xfaTable .xfaRlRow{display:flex;flex-direction:row-reverse;align-items:stretch;flex:1}.xfaTable .xfaRlRow>div{flex:1}.xfaNonInteractive input,.xfaNonInteractive textarea,.xfaDisabled input,.xfaDisabled textarea,.xfaReadOnly input,.xfaReadOnly textarea{background:initial}@media print{.xfaTextfield,.xfaSelect{background:rgba(0,0,0,0)}.xfaSelect{appearance:none;text-indent:1px;text-overflow:""}} :root{--focus-outline: solid 2px red;--hover-outline: dashed 2px blue;--freetext-line-height: 1.35;--freetext-padding: 2px;--editorInk-editing-cursor: url(images/toolbarButton-editorInk.svg) 0 16}@media(forced-colors: active){:root{--focus-outline: solid 3px ButtonText;--hover-outline: dashed 3px ButtonText}}[data-editor-rotation="90"]{transform:rotate(90deg)}[data-editor-rotation="180"]{transform:rotate(180deg)}[data-editor-rotation="270"]{transform:rotate(270deg)}.annotationEditorLayer{background:transparent;position:absolute;top:0;left:0;font-size:calc(100px*var(--scale-factor));transform-origin:0 0}.annotationEditorLayer .selectedEditor{outline:var(--focus-outline);resize:none}.annotationEditorLayer .freeTextEditor{position:absolute;background:transparent;border-radius:3px;padding:calc(var(--freetext-padding)*var(--scale-factor));resize:none;width:auto;height:auto;z-index:1;transform-origin:0 0;touch-action:none}.annotationEditorLayer .freeTextEditor .internal{background:transparent;border:none;top:0;left:0;overflow:visible;white-space:nowrap;resize:none;font:10px sans-serif;line-height:var(--freetext-line-height)}.annotationEditorLayer .freeTextEditor .overlay{position:absolute;display:none;background:transparent;top:0;left:0;width:100%;height:100%}.annotationEditorLayer .freeTextEditor .overlay.enabled{display:block}.annotationEditorLayer .freeTextEditor .internal:empty::before{content:attr(default-content);color:gray}.annotationEditorLayer .freeTextEditor .internal:focus{outline:none}.annotationEditorLayer .inkEditor.disabled{resize:none}.annotationEditorLayer .inkEditor.disabled.selectedEditor{resize:horizontal}.annotationEditorLayer .freeTextEditor:hover:not(.selectedEditor),.annotationEditorLayer .inkEditor:hover:not(.selectedEditor){outline:var(--hover-outline)}.annotationEditorLayer .inkEditor{position:absolute;background:transparent;border-radius:3px;overflow:auto;width:100%;height:100%;z-index:1;transform-origin:0 0;cursor:auto}.annotationEditorLayer .inkEditor.editing{resize:none;cursor:var(--editorInk-editing-cursor),pointer}.annotationEditorLayer .inkEditor .inkEditorCanvas{position:absolute;top:0;left:0;width:100%;height:100%;touch-action:none}#editorNone::before{mask-image:var(--toolbarButton-editorNone-icon)}#editorFreeText::before{mask-image:var(--toolbarButton-editorFreeText-icon)}#editorInk::before{mask-image:var(--toolbarButton-editorInk-icon)}`;
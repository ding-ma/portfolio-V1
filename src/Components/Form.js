import React, {Component} from 'react'

class Form extends Component {
    render() {
        return (
            <div id="container">

                <form
                    id="form2"
                    name="form2"
                    acceptCharset="UTF-8"
                    autoComplete="off"
                    encType="multipart/form-data"
                    method="post"
                    noValidate
                    action="https://dingma.wufoo.com/forms/ma5u4611pc2t7b/#public"
                >
                    <ul>
                        <li className="hide">
                            <input type="hidden" id="idstamp" name="idstamp"
                                   value=""/>
                        </li>

                        <li id="foli4" data-wufoo-field="" data-field-type="text">
                            <input id="Field4" name="Field4" type="text"
                                   maxLength="255" tabIndex="0" onKeyUp="" placeholder="Name"/>

                        </li>
                        <li id="foli2" className="notranslate">


                            <input id="Field2" name="Field2" type="text" spellCheck="false"
                                   maxLength="255" tabIndex="0"
                                   placeholder="Email"/>

                        </li>
                        <li id="foli5" data-wufoo-field="" data-field-type="text">

                            <input id="Field5" name="Field5" type="text"
                                   maxLength="255" tabIndex="0" onKeyUp="" placeholder="Subject"/>
                        </li>
                        <li id="foli1">
                                <textarea id="Field1"
                                          name="Field1"
                                          spellCheck="true"
                                          rows="10" cols="50"
                                          tabIndex="0"
                                          onKeyUp=""
                                          placeholder="What would you like to chat about?"/>

                        </li>
                        <li className="buttons ">
                            <div>
                                <input id="saveForm" name="saveForm"
                                       type="submit" value="Submit"
                                       onClick="window.location.href = 'https://www.google.ca/';"
                                />

                            </div>
                        </li>


                    </ul>
                </form>

            </div>
        )

    }

}

//mXve9YwHNaBnKLA9/3TzwVMOQYK+l03anPJsAL+lnUg=
export default Form;

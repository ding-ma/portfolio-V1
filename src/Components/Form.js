import React, {Component} from 'react'

class Form extends Component {
    render() {
        return (
            <div id="container" className="ltr">

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
                        <li id="foli4" data-wufoo-field="" data-field-type="text">
                            <label className="desc" id="title4" htmlFor="Field4">
                            </label>
                            <div>
                                <input id="Field4" name="Field4" type="text"
                                       maxLength="255" tabIndex="0" onKeyUp="" placeholder="Name"/>
                            </div>
                        </li>
                        <li id="foli2" className="notranslate      ">
                            <label id="title2" htmlFor="Field2">
                            </label>
                            <div>
                                <input id="Field2" name="Field2" type="email" spellCheck="false"
                                       maxLength="255" tabIndex="0"
                                       placeholder="Email"/>
                            </div>
                        </li>
                        <li id="foli5" data-wufoo-field="" data-field-type="text">
                            <label className="desc" id="title5" htmlFor="Field5">
                            </label>
                            <div>
                                <input id="Field5" name="Field5" type="text"
                                       maxLength="255" tabIndex="0" onKeyUp="" placeholder="Subject"/>
                            </div>
                        </li>
                        <li id="foli1"><label className="desc" id="title1" htmlFor="Field1">

                        </label>
                            <div>
                                <textarea id="Field1"
                                          name="Field1"
                                          spellCheck="true"
                                          rows="10" cols="50"
                                          tabIndex="0"
                                          onKeyUp=""
                                          placeholder="Message"/>

                            </div>
                        </li>
                        <li className="buttons ">
                            <div>
                                <input id="saveForm" name="saveForm"
                                       type="submit" value="Submit"
                                       onClick="window.location.href = 'https://www.google.ca/';"
                                />

                            </div>
                        </li>

                        <li className="hide">
                            <input type="hidden" id="idstamp" name="idstamp"
                                   value=""/>
                        </li>
                    </ul>
                </form>

            </div>
        )

    }

}

//mXve9YwHNaBnKLA9/3TzwVMOQYK+l03anPJsAL+lnUg=
export default Form;

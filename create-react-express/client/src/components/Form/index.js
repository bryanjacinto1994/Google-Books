import React from 'react';

function Form(props) {
    return (

        <div id='search-form' className='text-center'>
            <div className='row'>
                <div className="col-sm-12">
                    <div className='container' style={{ alignItems: 'center'}}>
                        <input className='form-control' name='title'
                            placeholder='Search for a book...'
                            type='text'
                            onChange={props.handleInputChange} style={{ width: 500, alignItems: 'center' }}></input>
                    </div>
                </div>
                <br />
            </div>
            <br/>

            <button
                className='btn btn-block btn-dark'
                onClick={props.handleFormSubmit}
                type='submit'
                style={{ width: 100, position: 'relative', left: 410, borderRadius: 20 }}
            >Search
            </button>

        </div>

    )
}

export default Form
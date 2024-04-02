import React from "react";

class Modal extends React.Component {

    closeModal = () => {
        console.log('CLose modal')
        this.props.switchModal(false)
        this.props.editCard(null)
    }

    render() {
        const {showModal} = this.props;

        return (
            showModal &&
            <>
                <div className='modal'>
                    <div className="content">
                        {/* MODAL CONTENT HERE */}
                        {this.props.children}
                    </div>
                    <div className="close" onClick={this.closeModal}>X</div>
                </div>
                <div className='modal-overlay' onClick={this.closeModal}></div>
            </>
        )
    }
}

export default Modal;
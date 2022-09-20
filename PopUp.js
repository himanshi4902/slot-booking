import React, {useState} from 'react'
import { Modal, ModalHeader } from "reactstrap";

export default function PopUp(){
    const [modal, setmodal] = useState(false)
    return (
        <div>
            <Modal
                size='lg'
                isOpen={modal}
                toggle={()=>setmodal(!modal)}
            >

                <ModalHeader 
                toggle={()=>setmodal(!modal)}
                >
                    PopUp
                </ModalHeader>
            </Modal>

        <button className='btn mt-3' onClick={()=>setmodal(true)}>
            List item
        </button>
        </div>
    )
}


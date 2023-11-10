/* eslint-disable no-debugger */
import "./modal.scss"
export interface ModalContent {
    Content?: React.ReactNode;
    isModalVisible: boolean;
    ModalName: string;
    OnClose?: () => void;
}

export const ModalComponent : React.FunctionComponent<ModalContent> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Content,
    isModalVisible,
    ModalName = "Hero Statistics",
    OnClose = () => {}
}) => {
    const customstyles =  {
        display: isModalVisible? "block" : "none"
    }

    const handleClose = () =>{
        OnClose();
    }

    return (
        <>
        <div className={`modal fade ${isModalVisible ? 'show' : ''}`} style={customstyles} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header"> 
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">{ModalName}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body modal-container">
                    {Content}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                </div>
                </div>
            </div>
        </div>

        </>
    );

}
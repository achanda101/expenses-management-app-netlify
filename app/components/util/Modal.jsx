export default function Modal({ children, onClose }) {
    return (
        <div className="modal-backdrop" onClick={onClose} role="button" tabIndex="0">
            <dialog className="modal" open onClick={(event) => event.stopPropagation()}>
                {children}
            </dialog>
        </div>
    )
}
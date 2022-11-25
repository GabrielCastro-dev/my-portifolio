import './Blob.scss';

function Blob(props) {
    const useStyle = {
        width: props.width,
        height: props.height,
        top: props.top,
        right: props.right,
        animationDuration: props.duration
    }

    return (
        <div className='blob' style={useStyle} ></div>
    )
}

export default Blob;
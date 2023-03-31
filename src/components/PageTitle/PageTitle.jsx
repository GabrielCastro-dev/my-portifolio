import './PageTitle.scss';

function PageTitle({title, subtitle}) {
    return (
        <>
            <h1>{title}</h1>
            <h1 className='empty'>{subtitle}</h1>
        </>
    )
}

export default PageTitle;
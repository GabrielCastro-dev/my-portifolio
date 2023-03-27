import './PageTitle.scss';

function PageTitle({title, subtitle}) {
    return (
        <>
            <h1>{title}</h1>
            <h1>{subtitle}</h1>
        </>
    )
}

export default PageTitle;
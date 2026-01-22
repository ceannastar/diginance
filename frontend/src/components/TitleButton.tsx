

export default function TitleButton({title})
{
    return(
        <div style={{width: '50%', height: '70%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
            <div style={{width: '95%', height: '80%', borderRadius: 10, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p>{title}</p>
            </div>
        </div>
    );
}
const items = [
    {
        task: "выучить react",
        icons: "🔥",
        isComplited: false
    },
    {
        task: "выучить js",
        icons: "💧",
        isComplited: true
    },
    {
        task: "выучить angular",
        icons: "⚡",
        isComplited: false
    }
];


export const List = () => {
    return (
        <div>
            <h1>Список задач</h1>
            <section>
                {items.map((item, index) => (
                    <div key={index} style={{ backgroundColor: item.isComplited ? 'red' : 'transparent' }}>
                    <span >
                        {item.icons} 
                    </span>
                    <span>
                        {item.task}
                    </span>
                    </div>
                ))}
            </section>
        </div>
    );
}
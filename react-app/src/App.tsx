import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <Alert>
      Hello <span> World </span>
      </Alert>

      <div>
        <Button color='danger' onClick={()=>console.log('Clicked')}>
          My Button
        </Button>

      </div>
      
    </div>
  );
}

export default App;

import {Button,Modal}from 'react-bootstrap'
import { useState} from 'react';

function MovieAdd ({add}) {
    const [show, setShow] = useState(false);
    const [newFilm, setnewFilm] = useState([])
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlchange=(event)=>{
       setnewFilm({...newFilm,[event.target.name]:event.target.value})
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add new movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ display:'flex', flexDirection:'column'}}>
              title:<input name='title' onChange={handlchange}/>
              description:<input name='description' onChange={handlchange}/>
              posterUrl:<input name='posterUrl'onChange={handlchange}/>
              rate:<input name='rate'onChange={handlchange}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>add(newFilm)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default MovieAdd
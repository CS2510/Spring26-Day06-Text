class TriangleComponent extends Component {
    speed = 60
    start() {

    }
    update() {
        // console.log(Input.keysDown)
        if(Input.keysDown.includes("ArrowRight")){
            this.transform.position.x += Time.deltaTime * this.speed
        }
        if(Input.keysDown.includes("ArrowLeft")){
            this.transform.position.x += - Time.deltaTime * this.speed
        }
    }
    
}
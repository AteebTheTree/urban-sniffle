AFRAME.registerComponent("Fish", {
    init:function(){
        for(var i = 1; i<=20; i++)
        {
            var id = `hurdle${i}`;
            var pos_x = Math.floor(Math.random()*3000+ -1000);
            var pos_y = Math.floor(Math.random()*2 + -1);
            var pos_z = Math.floor(Math.random()*3000+ -1000);
            var position = {x: pos_x, y: pos_y, z: pos_z};
            this.fish(id, position)
        }
    },
    fish:(id, position)=>{
        var terrain_el = document.querySelector("#terrain")
        var bird_el = document.createElement("a-entity")
        bird_el.setAttribute("id", id)
        bird_el.setAttribute("position", position)
        bird_el.setAttribute("scale", {x: 500, y: 500, z: 500})
        bird_el.setAttribute("gltf-model", "assets/Scuba-Diving-main/assets/fish/scene.gltf")
        bird_el.setAttribute("animation-mixer", {})
        bird_el.setAttribute("static-body", {shape: 'sphere', sphereRadius: 5})
        bird_el.setAttribute("game-play", {elementId: `#${id}`})
        terrain_el.appendChild(bird_el)
    }
})
const checkbox_front = document.getElementById("front");
const checkbox_wv = document.getElementById("wv");
const checkbox_dut = document.getElementById("dut");

var iframe = document.getElementById("api-frame");
var version = "1.12.1";
var client = new Sketchfab(version, iframe);

var uid = "95a946f35452414aa6024fe4d1e31c82";

client.init(uid, {
  success: function onSuccess(api) {
    api.start();
    api.addEventListener("viewerready", function () {
      //API is ready to use
      console.log("Viewer is ready");

      //get NodeMap
      api.getNodeMap(function (err, nodes) {
        if (!err) {
          window.console.log(nodes); // [ ... ]
        }
        // Get a node with a specific name, and hide it
        const front = Object.values(nodes).find(
          (node) => node.name === "RVC1000 Assy - revB_Front_1"
        );
        console.log(front);

        checkbox_front.addEventListener("change", (event) => {
          if (event.currentTarget.checked) {
            api.show(front.instanceID);
          } else {
            api.hide(front.instanceID);
          }
        });
        
        const wv = Object.values(nodes).find(
          (node) => node.name === "RVC1000 Assy - revB_WV_11"
        );
        console.log(wv);
        
        checkbox_wv.addEventListener("change", (event) => {
          if (event.currentTarget.checked) {
            api.show(wv.instanceID);
          } else {
            api.hide(wv.instanceID);
          }
        });
        
        
        const dut = Object.values(nodes).find(
          (node) => node.name === "RVC1000 Assy - revB_DUT_12"
        );
        console.log(dut);
        
        checkbox_dut.addEventListener("change", (event) => {
          if (event.currentTarget.checked) {
            api.show(dut.instanceID);
          } else {
            api.hide(dut.instanceID);
          }
        });
        

        //api.hide(front.instanceID);
      });
    });
  },
  error: function onError() {
    console.log("Viewer error");
  }
});
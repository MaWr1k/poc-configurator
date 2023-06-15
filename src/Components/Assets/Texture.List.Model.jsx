/*
 *  Document    : Texture.List.Model.js
 *  Author      : Ganapathy
 *  Description : Texture Change for Common
 */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import * as THREE from "three";

// Import Components
import Forms from "../Controls/Forms";
import Texture from "../JSON/Texture.Collection.json";
import { useObjectStore } from "../Storage/Global.Storage";

const TextureListModel = ({ IsModelopen, IsModelClose }) => {
  // Context Function
  const { IsCurrentObject } = useObjectStore();

  // Apply Texture in Specific Object
  const ApplyTexture = (props) => {
    if (IsCurrentObject != null) {
      let texture;
      if (props == "dark_wood_diff_1k") {
        texture = new THREE.TextureLoader().load(
          "./textures/dark_wood_diff_1k.jpg"
        );
      }
      if (props == "dark_wood_rough_1k") {
        texture = new THREE.TextureLoader().load(
          "./textures/dark_wood_rough_1k.jpg"
        );
      }
      if (props == "Floor_Concrete_Brick") {
        texture = new THREE.TextureLoader().load(
          "./textures/Floor_Concrete_Brick.jpg"
        );
      }
      if (props == "Floor_Grass1") {
        texture = new THREE.TextureLoader().load("./textures/Floor_Grass1.jpg");
      }
      if (props == "Floor_Marble1") {
        texture = new THREE.TextureLoader().load(
          "./textures/Floor_Marble1.jpg"
        );
      }
      if (props == "Floor_Marble1") {
        texture = new THREE.TextureLoader().load(
          "./textures/Floor_Marble1.jpg"
        );
      }
      if (props == "Floor_Marble2") {
        texture = new THREE.TextureLoader().load(
          "./textures/Floor_Marble2.jpg"
        );
      }
      if (props == "Floor_Marble3") {
        texture = new THREE.TextureLoader().load(
          "./textures/Floor_Marble3.jpg"
        );
      }
      if (props == "Floor_Marble4") {
        texture = new THREE.TextureLoader().load(
          "./textures/Floor_Marble4.jpg"
        );
      }
      if (props == "Floor_Marble5") {
        texture = new THREE.TextureLoader().load(
          "./textures/Floor_Marble5.jpg"
        );
      }
      if (props == "Floor_Marble6") {
        texture = new THREE.TextureLoader().load(
          "./textures/Floor_Marble6.jpg"
        );
      }
      if (props == "Floor_Marble7") {
        texture = new THREE.TextureLoader().load(
          "./textures/Floor_Marble7.jpg"
        );
      }
      if (props == "Floor_Marble8") {
        texture = new THREE.TextureLoader().load(
          "./textures/Floor_Marble8.jpg"
        );
      }
      if (props == "Floor_Marble9") {
        texture = new THREE.TextureLoader().load(
          "./textures/Floor_Marble9.jpg"
        );
      }
      if (props == "Floor_Wood1") {
        texture = new THREE.TextureLoader().load("./textures/Floor_Wood1.jpg");
      }
      if (props == "Floor_Wood2") {
        texture = new THREE.TextureLoader().load("./textures/Floor_Wood2.jpg");
      }
      if (props == "Floor_Wood3") {
        texture = new THREE.TextureLoader().load("./textures/Floor_Wood3.jpg");
      }
      if (props == "Wall_Blue") {
        texture = new THREE.TextureLoader().load("./textures/Wall_Blue.jpg");
      }
      if (props == "Wall_Ceramic_brown") {
        texture = new THREE.TextureLoader().load(
          "./textures/Wall_Ceramic_brown.jpg"
        );
      }
      if (props == "Wall_Ceramic_green") {
        texture = new THREE.TextureLoader().load(
          "./textures/Wall_Ceramic_green.jpg"
        );
      }
      if (props == "Wall_Green") {
        texture = new THREE.TextureLoader().load("./textures/Wall_Green.jpg");
      }
      if (props == "Wall_Leaf1") {
        texture = new THREE.TextureLoader().load("./textures/Wall_Leaf1.jpg");
      }
      if (props == "Wall_Leaf2") {
        texture = new THREE.TextureLoader().load("./textures/Wall_Leaf2.jpg");
      }
      if (props == "Wall_Orange") {
        texture = new THREE.TextureLoader().load("./textures/Wall_Orange.jpg");
      }
      if (props == "Wall_Red_marbles") {
        texture = new THREE.TextureLoader().load(
          "./textures/Wall_Red_marbles.jpg"
        );
      }
      if (props == "Wall_White") {
        texture = new THREE.TextureLoader().load("./textures/Wall_White.jpg");
      }
      IsCurrentObject.material.map = texture;
      IsCurrentObject.material.needsUpdate = true;
      IsCurrentObject.material.map.needsUpdate = true;
    }

    return IsCurrentObject;
  };

  // Cancel Button Action
  const cancelbutton = () => {
    IsModelClose();
  };
  return (
    <div>
      <Modal
        closeOnOverlayClick={false}
        isOpen={IsModelopen}
        size="md"
        onClose={IsModelClose}
        style={{ maxHeight: "560px" }}
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader>Select Texture</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Forms
              style={{ maxHeight: "560px" }}
              className="flex flex-no-wrap space-y-2 gap-3 scroll-smoth overflow-y-scroll overflow-y-hidden"
            >
              <div className="grid grid-cols-3 gap-4 ">
                {Texture.texture.map((item, index) => (
                  <div key={index}>
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-32 h-32"
                      onClick={() => {
                        ApplyTexture(item.name);
                        cancelbutton();
                      }}
                    />
                  </div>
                ))}
              </div>
            </Forms>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={cancelbutton}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default TextureListModel;

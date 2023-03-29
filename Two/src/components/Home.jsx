import { Box, Container, Image, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Heading, Stack } from "@chakra-ui/react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "3xl",
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={"container.xl"} minH={"100vh"} p="16">
        <Heading
          textTransform={"uppercase"}
          p="2"
          w={"fit-content"}
          borderBottom={"2px solid"}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Image
            src={img5}
            h={["40", "400"]}
            filter={"hue-rotate(-130deg)"}
            alt="image 5"
          />
          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nihil debitis nam fugiat aperiam cumque vitae inventore id, tempora,
            velit tempore earum corporis odio officia dolorem, consequatur
            repellat veniam maxime! Placeat minima corporis quaerat distinctio
            iure eveniet perspiciatis quisquam exercitationem officiis dolores,
            ipsum enim quo accusamus odit provident rem hic totam doloremque
            qui. Dolorem repellat perspiciatis eaque ea fugiat? Maxime? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil
            debitis nam fugiat aperiam cumque vitae inventore id, tempora, velit
            tempore earum corporis odio officia dolorem, consequatur repellat
            veniam maxime!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w="full" h={"100vh"}>
        <Image src={img1} objectFit={"cover"} alt="image 1" />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Watch the future
        </Heading>
      </Box>

      <Box w="full" h={"100vh"}>
        <Image src={img2} objectFit={"cover"} alt="image 2" />
        <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>
          Future is Gaming
        </Heading>
      </Box>

      <Box w="full" h={"100vh"}>
        <Image src={img3} objectFit={"cover"} alt="image 3" />
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>

      <Box w="full" h={"100vh"}>
        <Image src={img4} objectFit={"cover"} alt="image 4" />
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
          Night life is Cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;

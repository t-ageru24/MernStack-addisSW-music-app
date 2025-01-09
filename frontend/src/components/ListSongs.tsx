import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../features/Song/SongSlice";
import { Song } from "../types/types";
import { RootState } from "../app/store";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaSpinner } from "react-icons/fa6";
import Modal from "./Modal/Modal";
import UpdateSong from "./UpdateSong";
import DeleteSong from "./DeleteSong";
import { toast } from "react-toastify";

import { Box, Flex, Text, Card, Image } from "rebass";
import Layout from "./common/Layout";
import {
  ResponsiveFlex,
  ButtonContainer,
  Button,
  Pagination,
  StyledActiveButton,
} from "../assets/style/ListSongsStyle";

const ListSongs: React.FC = () => {
  const dispatch = useDispatch();
  const { songs, isLoading, error } = useSelector(
    (state: RootState) => state.songs
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const songsPerPage = 5;

  const handleOpenModal = (component: React.ReactNode) => {
    setModalContent(component);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  if (error) {
    toast.error(error);
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);
  const totalPages = Math.ceil(songs.length / songsPerPage);

  return (
    <Layout>
      <ResponsiveFlex>
        <Flex
          flexDirection="column"
          alignItems="center"
          width="100%"
          p="1rem"
          bg="white"
          sx={{ borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
        >
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            bg="lightgray"
            p="1rem"
            sx={{ borderRadius: "10px", marginBottom: "1rem" }}
          >
            <Text width="25%" fontWeight="bold">
              Song
            </Text>
            <Text width="25%" fontWeight="bold">
              Album
            </Text>
            <Text fontWeight="bold">Genre</Text>
            <Text fontWeight="bold">Actions</Text>
          </Flex>
          {isLoading ? (
            <Text
              fontWeight="bold"
              textAlign="center"
              fontSize="1.5rem"
              marginY="10%"
            >
              <FaSpinner />
              Loading...
            </Text>
          ) : (
            currentSongs.map((song: Song, index: number) => (
              <Card
                key={song._id}
                width="100%"
                p="1rem"
                mb="1rem"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  ":hover": { transform: "scale(1.02)", boxShadow: "0 0 15px rgba(0,0,0,0.2)" },
                }}
              >
                <Flex alignItems="center" width="25%">
                  <Image
                    src="../../assets/sound-icon.png"
                    sx={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  />
                  <Box ml="1rem">
                    <Text fontSize="1rem" fontWeight="bold">
                      {song.title}
                    </Text>
                    <Text fontSize="0.9rem" color="gray">
                      By: {song.artist}
                    </Text>
                  </Box>
                </Flex>
                <Text width="25%">{song.album}</Text>
                <Text textAlign="center">{song.genre}</Text>
                <ButtonContainer>
                  <Button
                    onClick={() =>
                      handleOpenModal(
                        <UpdateSong
                          onClose={handleCloseModal}
                          id={song._id}
                        />
                      )
                    }
                  >
                    <CiEdit />
                  </Button>
                  <Button
                    onClick={() =>
                      handleOpenModal(
                        <DeleteSong
                          onClose={handleCloseModal}
                          id={song._id}
                        />
                      )
                    }
                  >
                    <MdOutlineDeleteOutline />
                  </Button>
                </ButtonContainer>
              </Card>
            ))
          )}
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            component={modalContent}
          />
        </Flex>
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            return pageNumber === currentPage ? (
              <StyledActiveButton
                key={index}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </StyledActiveButton>
            ) : (
              <Button key={index} onClick={() => handlePageChange(pageNumber)}>
                {pageNumber}
              </Button>
            );
          })}
        </Pagination>
      </ResponsiveFlex>
    </Layout>
  );
};

export default ListSongs;

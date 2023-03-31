import CreateModal from "../components/ConfirmModal.vue";
export default function useConfirmModal(props) {
  const dialogProps = useConfirmDialog();
  const modal = h(CreateModal, { modalProps: dialogProps, ...props });
  return [modal, dialogProps];
}

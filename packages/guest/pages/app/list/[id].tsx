import { useState } from 'react';
import Head from 'next/head';

import { DashboardLayout } from '@components/Layout';
import { ListForm, ListHeader } from '@fragments/app/List';
import { Button, ButtonVariants, ButtonSizes, ButtonColors } from '@components/Button';
import { useRouter } from 'next/router';
import { Heading, HeadingVariants, Text, TextVariants, TypoTags } from '@components/Typography';
import Modal from '@components/Modal';

export default function UpdateList() {
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCloseModal = () => setShowDeleteModal(false);

  return (
    <>
      <Head>
        <title>Update List | Todo Liszt</title>
      </Head>

      <form autoComplete="off">
        <ListHeader title="Update list">
          <Button
            type="button"
            size={ButtonSizes.Medium}
            bgColor={ButtonColors.Primary_03}
            onClick={() => setShowDeleteModal(!showDeleteModal)}
          >
            Delete
          </Button>

          {showDeleteModal && (
            <Modal onCloseModal={handleCloseModal}>
              <Heading as={TypoTags.H3} variant={HeadingVariants.Headline4}>
                Delete list
              </Heading>
              <Text as={TypoTags.P} variant={TextVariants.Body2} css={{ margin: '1.5rem 0 2rem' }}>
                Are you sure want to delete task ?
              </Text>

              <div css={{ textAlign: 'right' }}>
                <Button type="button" variant={ButtonVariants.Theme} onClick={handleCloseModal}>
                  Cancel
                </Button>
                <Button
                  type="button"
                  bgColor={ButtonColors.Primary_03}
                  css={{ marginLeft: '1rem' }}
                >
                  Delete
                </Button>
              </div>
            </Modal>
          )}

          <Button
            type="button"
            variant={ButtonVariants.Theme}
            size={ButtonSizes.Medium}
            onClick={() => router.replace('/app/list')}
          >
            Cancel
          </Button>
          <Button type="submit" size={ButtonSizes.Medium}>
            Update
          </Button>
        </ListHeader>

        <ListForm
          itemData={{
            name: 'Todo test',
            desc: 'Test :D',
            startDate: '13/08/2021',
            startTime: '9:00',
            endDate: '13/08/2021',
            endTime: '18:00',
            color: 'Purple',
          }}
        />
      </form>
    </>
  );
}

// eslint-disable-next-line react/display-name
UpdateList.getLayout = (page: React.ReactNode) => <DashboardLayout>{page}</DashboardLayout>;

import { TabPanels, TabPanel, Tabs, Flex } from '@chakra-ui/react';
import { CreateTask, TaskList, ViewTask, EditTask } from '../content/@content';
import { Sections, Widget, Navbars } from '../components/@components';
import { EventContext } from '../context/@context';
import { useContext } from 'react';

const MainLayout = () => {
	const { tabs } = useContext(EventContext);
	return (
		<>
			<Sections sx={{ bgGradient: 'linear(to-r, violet.300, indigo.300)', h: '40%', maxW: 'container.full' }} />
			<Sections sx={{ maxW: 'container.sm', display: 'inline-flex', position: 'absolute', inset: 0 }}>
				<Flex w={'full'} gap={4} flexDir={'column'} my={'auto'}>
					<Navbars/>
					<Widget>
						<Tabs variant={'unstyled'} index={tabs}>
							<TabPanels>
								<TabPanel> <EditTask/> </TabPanel>
								<TabPanel> <ViewTask/> </TabPanel>
								<TabPanel> <TaskList/> </TabPanel>
								<TabPanel> <CreateTask/> </TabPanel>
							</TabPanels>
						</Tabs>
					</Widget>
				</Flex>
			</Sections>
			<Sections sx={{ h: '60%', maxW: 'container.full' }} />
		</>
	);
};

export default MainLayout;
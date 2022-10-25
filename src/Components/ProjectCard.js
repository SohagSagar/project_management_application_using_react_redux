import React from 'react';

const ProjectCard = () => {
    return (
        <div className='px-3'>
            <div className="card w-96 bg-base-100 shadow-sm mt-5 ">
                <div className="p-4">
                    {/* project informations */}
                    <div className='flex justify-between'>
                        {/* project name*/}
                        <div>
                            <div className="badge badge-md bg-red-200 border-0 text-red-600 text-sm">Backend team</div>
                            <p className='text-[12px] text-gray-500'>Management application</p>
                            <p className='text-[12px] text-gray-500'>Team Members: 8</p>
                        </div>

                        {/* progress */}
                        <div>
                            <div className="radial-progress text-red-400" style={{ "--value": "70", "--size": "4rem", "--thickness": "4px" }}>70%</div>
                        </div>
                    </div>
                    <hr className='my-2 ' />


                    {/* project descriptions */}

                    <p className='text-sm text-gray-500'>	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, maiores!</p>
                    <div className='mt-2 flex justify-between items-center'>
                        <div className="badge badge-sm bg-gray-400 border-0 text-white">25 Dec</div>
                        <div className="avatar">
                            <div className="w-6 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
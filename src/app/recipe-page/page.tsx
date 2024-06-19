import Image from "next/image";

export default function Home() {
    return (
        <div className="flex h-full justify-center items-center bg-[#f3e5d8]">
            <div className="w-[384px] my-20 bg-white flex justify-center p-6 rounded-lg">
                <div className="w-[336px] text-[#8c8b87] font-outfit text-[10px]">
                    <Image
                        src="/recipe-page/omelette.jpeg"
                        alt="article"
                        className="rounded-lg mb-5"
                        width={336}
                        height={200}
                    />
                    <div className="font-ys text-[#373634] text-[24px]">Simple Omelette Recipe</div>
                    <div className="mb-3">
                            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
                            to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                    </div>
                    <div className="mb-3 bg-[#fff7fc] rounded-lg p-4">
                            <p className="text-[#7f445d] font-ys text-[14px] mb-1">Preparation time</p>
                            <p className="mb-1 list-item list-inside text-[#7f445d]"><b className="text-[#5b5255]">Total: </b> <span className="text-[#8c8b87]">Approximately 10 minutes</span></p>
                            <p className="mb-1 list-item list-inside text-[#7f445d]"><b className="text-[#5b5255]">Preparation: </b> <span className="text-[#8c8b87]">5 minutes</span></p>
                            <p className="list-item list-inside text-[#7f445d]"><b className="text-[#5b5255]">Cooking: </b> <span className="text-[#8c8b87]">5 minutes</span></p>
                    </div>
                    <div>
                            <p className="font-ys text-[16px] text-[#864f43] mb-2">Ingredients</p>
                            <p className="mb-1 list-item list-inside text-[#864f43]"><span className="text-[#8c8b87]">2-3 large eggs</span></p>
                            <p className="mb-1 list-item list-inside text-[#864f43]"><span className="text-[#8c8b87]">Salt, to taste</span></p>
                            <p className="mb-1 list-item list-inside text-[#864f43]"><span className="text-[#8c8b87]">Pepper, to taste</span></p>
                            <p className="mb-1 list-item list-inside text-[#864f43]"><span className="text-[#8c8b87]">1 tablespoon of butter or oil</span></p>
                            <p className="mb-1 list-item list-inside text-[#864f43]"><span className="text-[#8c8b87]">Optional fillings: cheese, diced vegetables, cooked meats, herbs</span></p>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div>
                            <p className="font-ys text-[16px] text-[#864f43] mb-2">Instructions</p>
                            <div className="flex mb-1"><div className="mr-2 text-[#864f43] font-bold">1.</div> <div><b className="text-[#5b5255]">Beat the eggs: </b> <span className="text-[#8c8b87]">In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span></div></div>
                            <div className="flex mb-1"><div className="mr-2 text-[#864f43] font-bold">2.</div> <div><b className="text-[#5b5255]">Heat the pan: </b> <span className="text-[#8c8b87]">Place a non-stick frying pan over medium heat and add butter or oil.</span></div></div>
                            <div className="flex mb-1"><div className="mr-2 text-[#864f43] font-bold">3.</div> <div><b className="text-[#5b5255]">Cook the omelette: </b> <span className="text-[#8c8b87]">Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span></div></div>
                            <div className="flex mb-1"><div className="mr-2 text-[#864f43] font-bold">4.</div> <div><b className="text-[#5b5255]">Add fillings: </b> <span className="text-[#8c8b87]">When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span></div></div>
                            <div className="flex mb-1"><div className="mr-2 text-[#864f43] font-bold">5.</div> <div><b className="text-[#5b5255]">Fold and serve: </b> <span className="text-[#8c8b87]"> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span></div></div>
                            <div className="flex"><div className="mr-2 text-[#864f43] font-bold">6.</div> <div><b className="text-[#5b5255]">Enjoy: </b> <span className="text-[#8c8b87]"> Serve hot, with additional salt and pepper if needed.</span></div></div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div>
                            <p className="font-ys text-[16px] text-[#864f43] mb-2">Nutrition</p>
                            <div className="mb-3">
                                The table below shows nutritional values per serving without the additional fillings.
                            </div>
                            <div className="flex flex-wrap leading-6">
                                <div className="w-1/2 border-b">Calories</div>
                                <div className="w-1/2 text-[#864f43] font-bold border-b">277kcal</div>
                                <div className="w-1/2 border-b">Carbs</div>
                                <div className="w-1/2 text-[#864f43] font-bold border-b">0g</div>
                                <div className="w-1/2 border-b">Protein</div>
                                <div className="w-1/2 text-[#864f43] font-bold border-b">20g</div>
                                <div className="w-1/2">Fat</div>
                                <div className="w-1/2 text-[#864f43] font-bold">22g</div>
                            </div>
                    </div>
                </div>
            </div>
        </div>

     
    )
}
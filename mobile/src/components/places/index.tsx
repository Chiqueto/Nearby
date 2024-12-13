import { useRef } from "react"
import { Text, useWindowDimensions } from "react-native"
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"


import { Place, PlaceProps } from "../place"
import { s } from "./styles"

type Props = {
    data: PlaceProps[]
}

export function Places({ data }: Props) {
    const dimensions = useWindowDimensions()
    const BottomSheetRef = useRef<BottomSheet>(null)

    const snapPoints = {
        min: 278,
        max: dimensions.height - 200
    }

    return (
        <BottomSheet ref={BottomSheetRef} snapPoints={[snapPoints.min, snapPoints.max]} handleIndicatorStyle={s.indicator} backgroundStyle={s.container} enableOverDrag={true}>
            <BottomSheetFlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Place data={item} />}
                contentContainerStyle={s.content}
                ListHeaderComponent={() => (<Text style={s.title}>Explore locais perto de você</Text>)}
                showsVerticalScrollIndicator={false}
            />
        </BottomSheet>
    )
}
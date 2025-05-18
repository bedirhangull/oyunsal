import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import ReactImagePickerEditor, {
  type ImagePickerConf,
} from "react-image-picker-editor";
import "react-image-picker-editor/dist/index.css";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

const initialPlayers = [
  {
    id: 1,
    name: "Pumpkin Öykü",
    playerImage: "public/oykuphoto.jpeg",
  },
  { id: 2, name: "Bedosal", playerImage: "public/bedirhanphoto.jpg" },
  { id: 3, name: "TylerEylur" },
  { id: 4, name: "Egoat" },
  { id: 5, name: "SalihGS" },
  { id: 6, name: "Sözbals" },
  { id: 7, name: "Emooc" },
  { id: 8, name: "Röntgenci MORUQQ" },
  { id: 9, name: "Loki" },
  { id: 10, name: "BritishTaha" },
  { id: 11, name: "2NA" },
  { id: 12, name: "Emrecik" },
  { id: 13, name: "FTRBusra" },
];

  const GamerLibraryPage = () => {
  const [players, setPlayers] = useState(initialPlayers);
  const [searchTerm, setSearchTerm] = useState("");
  const [newPlayerName, setNewPlayerName] = useState('');
  const [newPlayerImage, setNewPlayerImage] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState<any[]>([]);
  const [showSelectedDialog, setShowSelectedDialog] = useState(false);

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const addNewPlayer = () => {
    if (!newPlayerName.trim() || !newPlayerImage) {
    alert("Lütfen isim ve resim girin.");
    return;
  }
    const newPlayer = {
       id: Date.now(),
    name: newPlayerName,
    playerImage: newPlayerImage,
  };
  setPlayers([...players, newPlayer]);
  setNewPlayerName('');
  setNewPlayerImage('');
  setOpen(false);
  };

  const config2: ImagePickerConf = {
    borderRadius: "8px",
    language: "en",
    width: "330px",
    height: "250px",
    objectFit: "contain",
    compressInitial: null,
    darkMode: false,
    rtl: false,
  };

  const handlePlayerSelect = (player: any) => {
  if (!selectedPlayers.some((p) => p.id === player.id)) {
    setSelectedPlayers([...selectedPlayers, player]);
  }
 
};


  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 max-w-5xl mx-auto w-full">
      <h1 className="text-2xl sm:text-3xl font-bold text-center">
        Oyuncu Listesi
      </h1>

      <div className="max-w-md mx-auto">
        <Input
          placeholder="Oyuncu ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <section>
        <ScrollArea className="h-screen rounded-md border p-4">
          <ul className="space-y-2">
            {filteredPlayers.map((player) => (
              <Card
                onClick={() => handlePlayerSelect(player)}
                key={player.id}
                className="flex-row items-center gap-4 p-4"
              >
                <img
                  src={player.playerImage}
                  className="w-20 h-20 object-cover rounded-full cursor-pointer border"
                />
                <CardContent className="p-0 text-l sm:text-base">
                  {player.name}
                </CardContent>
              </Card>
            ))}
            {filteredPlayers.length === 0 && (
              <p className="text-center text-muted-foreground">
                No players found.
              </p>
            )}
          </ul>
        </ScrollArea>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full text-white bg-black" size="lg">
            Yeni oyuncu Ekle
          </Button>
        </DialogTrigger>
        <DialogContent>
          <div className="grid gap-4 py-4  ">
            <div className="flex items-center justify-center">
            <div className="w-40 h-40 flex justify-center items-center rounded-full overflow-hidden border shadow-md ">
              <ReactImagePickerEditor
                config={config2}
                 imageSrcProp={newPlayerImage}
                 imageChanged={(newDataUri: any) => setNewPlayerImage(newDataUri)}
              />
              </div>  
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input id="name" value={newPlayerName} onChange={(e) => setNewPlayerName(e.target.value)} placeholder="Adiniz" className="col-span-10" />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={addNewPlayer} type="submit" className="w-full" >
              Ekle
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div>
        <Button onClick={() =>  setShowSelectedDialog(true)}
         className="w-full  block bg-red-800">Oyun Seç</Button>
         <Dialog open={showSelectedDialog} onOpenChange={setShowSelectedDialog}>
  <DialogContent>
    <h2 className="text-xl font-semibold text-center">Bu oyuncularla oyuna devam edin</h2>
    <ul className="space-y-2 mt-4">
      {selectedPlayers.map((player) => (
        <li key={player.id} className="flex items-center gap-4">
          <img
            src={player.playerImage}
            className="w-10 h-10 rounded-full object-cover border"
          />
          <span>{player.name}</span>
        </li>
      ))}
    </ul>
    <DialogFooter>
      <Button onClick={() => setShowSelectedDialog(false)}>Tamam</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

      </div>
      
    </div>
  );
};
export default GamerLibraryPage;

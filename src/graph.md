```mermaid
flowchart TD
subgraph SG1[Viewing]
subgraph SG1S1[Step 1]
VS1A1["Open `Book viewing` Form"]
VS1A2["Choose Date of viewing\n(Date picker input)"]
VS1A3["Choose Time of viewing\n(Buttons table with time in format HH:00)"]
VS1B1[""]
VS1B2[""]
direction TB
VS1A1-->VS1A2
VS1A2-->VS1A3
VS1A3-->VS1B1
VS1A3-->VS1B2
end
end
subgraph SG2[Rental Offer]
RO1[Rental Offer]-->RO2
end
subgraph SG3[Sale Offer]
SO1[Sale Offer]-->SO2
end
```
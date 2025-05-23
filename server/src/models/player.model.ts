import { Schema, model } from "mongoose";
import type { Document, Types } from "mongoose";
import { Player, PlayerResponse } from "../types/player";

interface PlayerDocument extends Player, Document {}

const playerSchema = new Schema<PlayerDocument>(
  {
    username: { type: String, required: true, unique: true },
    games: { type: Number, default: 0 },
    win: { type: Number, default: 0 },
    loss: { type: Number, default: 0 },
    ratio: { type: String, default: "0" },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (
        doc: PlayerDocument,
        ret: Partial<PlayerResponse & { _id: Types.ObjectId; __v: number }>
      ) {
        if (ret._id) {
          ret.id = ret._id.toString();
          delete ret._id;
          delete ret.__v;
        }
        return ret as PlayerResponse;
      },
    },
  }
);

export const PlayerModel = model<PlayerDocument>("Player", playerSchema);

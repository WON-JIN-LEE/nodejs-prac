import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { createBoardDto } from './dto/create-board.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class BoardsService {
    private boards: Board[] = [];
    constructor(
        @InjectModel('Board') private readonly boardModel: Model<Board>,
    ) {}

    async getAllBoards(): Promise<Board[]> {
        return this.boardModel.find().exec();
    }

    async createBoard(createBoardDto: createBoardDto): Promise<Board> {
        const createdBoard = await this.boardModel.create({
            ...createBoardDto,
            createdAt: new Date(),
        });
        return createdBoard;
    }

    getBoardById(id: string): Board {
        const found = this.boards.find((board) => board.id === id);

        if (!found) {
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }
        return found;
    }

    deleteBoard(id: string): void {
        const found = this.getBoardById(id);
        this.boards = this.boards.filter((board) => board.id !== found.id);
    }

    updateBoardStatus(id: string, status: BoardStatus): Board {
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
}
